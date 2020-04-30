import types from "prop-types";
import React from "react";

export const InfoBlock = ({ className, maxWidth, data, symbols, wrap }) => {
  const TranslateName = (currentName) => {
    var newName = [];
    var isUpperCase;
    for (var i = 0; i < currentName.length; i++) {
      isUpperCase = currentName[i].toUpperCase() === currentName[i];
      newName += !isUpperCase
        ? currentName[i]
        : `-` + currentName[i].toLowerCase();
    }
    return newName;
  };
  const WorkZone = (currentNames, item) => {
    return (
      <>
        {currentNames.map((name, num) => {
          const newName = TranslateName(currentNames[num]);
          const currentItem = item[`${currentNames[num]}`];
          return (
            <div
              className={`${className}${symbols}${newName}`}
              key={`2${className}${num}`}
            >
              {currentItem.__proto__.constructor.name !== "Array" ? (
                currentItem
              ) : (
                <InfoBlock
                  className={`${newName}__item`}
                  data={currentItem}
                  symbols="--"
                />
              )}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div
      className={className}
      style={{ maxWidth: `${maxWidth * 1 + 16 * 2}px` }}
    >
      {data.map((item) => {
        const currentNames = Object.keys(item);
        return (
          <>
            {wrap ? (
              <div className={`${className}__item-wrap`}>
                {WorkZone(currentNames, item)}
              </div>
            ) : (
              WorkZone(currentNames, item)
            )}
          </>
        );
      })}
    </div>
  );
};

InfoBlock.propTypes = {
  className: types.string,
  maxWidth: types.string,
  symbols: types.string,
  data: types.any.isRequired,
  wrap: types.bool,
};

InfoBlock.defaultProps = {
  className: "info-block",
  symbols: "__",
  wrap: false,
};
