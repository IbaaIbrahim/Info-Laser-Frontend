import type {YMapLocationRequest} from "@yandex/ymaps3-types";

export const deliveryLocation: YMapLocationRequest = {
  center: [35, 57.4],
  zoom: 6,
};

export const deliveryPlaces = [
  {
    id: "1",
    label: "г. Раменское",
    text: "ул. Михалевича",
    longitude: 38.247660,
    latitude: 55.561726,
  },
  {
    id: "2",
    label: "г. Санкт-Петербург",
    text: "Дальневосточный проспект, д. 100, корп. 49",
    longitude: 30.491561,
    latitude: 59.876147,
  },
];