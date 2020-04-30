import React from "react";

import { Button } from "../../../../components/Button";

import imgCard1 from "../../../../assets/images/Marvel/8.Price-Card1.png";
import imgCard2 from "../../../../assets/images/Marvel/8.Price-Card2.png";
import imgCard3 from "../../../../assets/images/Marvel/8.Price-Card3.png";

export const priceData = [
  {
    card: [
      {
        header: [
          { image: <img alt="hero" src={imgCard1} /> },
          { name: "standart" },
          {
            cost: [{ currency: "$" }, { amount: "107" }, { period: "/month" }],
          },
          { note: "15 day free trial om all accounts" },
        ],
      },
      {
        data: [
          { text: "> 10 pages website" },
          { text: "> sell 1 product & accept donations" },
          { text: "> developer platform" },
          { text: "> 20 pages, galleries" },
          { text: "> 120 GB cloud storage" },
          { text: "-" },
          { text: "-" },
        ],
      },
      {
        button: (
          <Button
            className="prise-cards"
            src="#"
            minHeight="44"
            color="primaryDarkGrey"
            bgColor="white"
          >
            get started now
          </Button>
        ),
      },
    ],
  },

  {
    card: [
      {
        header: [
          { popular: "most popular" },
          { image: <img alt="hero" src={imgCard2} /> },
          { name: "premium" },
          {
            cost: [{ currency: "$" }, { amount: "433" }, { period: "/month" }],
          },
          { note: "15 day free trial om all accounts" },
        ],
      },
      {
        data: [
          { text: "> 100 pages website" },
          { text: "> sell 1 product & accept donations" },
          { text: "> developer platform" },
          { text: "> 90 pages, galleries" },
          { text: "> 500 GB cloud storage" },
          { text: "> mobile website and store" },
          { text: "-" },
        ],
      },
      {
        button: (
          <Button
            className="prise-cards"
            src="#"
            minHeight="44"
            color="primaryDarkGrey"
            bgColor="white"
          >
            get started now
          </Button>
        ),
      },
    ],
  },
  {
    card: [
      {
        header: [
          { image: <img alt="hero" src={imgCard3} /> },
          { name: "premium" },
          {
            cost: [{ currency: "$" }, { amount: "1233" }, { period: "/month" }],
          },
          { note: "15 day free trial om all accounts" },
        ],
      },
      {
        data: [
          { text: "> 100 pages website" },
          { text: "> sell 1 product & accept donations" },
          { text: "> developer platform" },
          { text: "> 90 pages, galleries" },
          { text: "> 500 GB cloud storage" },
          { text: "> mobile website and store" },
          { text: "24/7 support" },
        ],
      },
      {
        button: (
          <Button
            className="prise-cards"
            src="#"
            minHeight="44"
            color="primaryDarkGrey"
            bgColor="white"
          >
            get started now
          </Button>
        ),
      },
    ],
  },
];
