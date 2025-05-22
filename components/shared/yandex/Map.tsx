'use client';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ReactifiedModule} from '@yandex/ymaps3-types/reactify/reactify';
import {cn} from "@/lib/utils";
import {ClassName} from "@/types/types";
import {MapPin} from "lucide-react";
import type {YMapLocationRequest} from "@yandex/ymaps3-types";

type ReactifiedApi = ReactifiedModule<typeof ymaps3>;

interface Place {
  id: string;
  label: string;
  text: string;
  longitude: number;
  latitude: number;
}

interface MapProps extends ClassName {
  places: Place[];
  location: YMapLocationRequest;
}

const Map: React.FC<MapProps> = ({className, places, location}) => {
  const [reactifiedApi, setReactifiedApi] = React.useState<ReactifiedApi>();

  React.useEffect(() => {
    Promise.all([ymaps3.import('@yandex/ymaps3-reactify'), ymaps3.ready]).then(([{reactify}]) =>
      setReactifiedApi(reactify.bindTo(React, ReactDOM).module(ymaps3))
    );
  }, []);

  if (!reactifiedApi) {
    return null;
  }

  const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = reactifiedApi;

  return (
    <YMap className={cn("", className)} location={location}>
      <YMapDefaultSchemeLayer/>
      <YMapDefaultFeaturesLayer/>
      {places.map((place) => (
        <YMapMarker
          key={place.id}
          coordinates={[place.longitude, place.latitude]}
        >
          <MapPin className={"fill-red-500 size-8"}/>
        </YMapMarker>
      ))}
    </YMap>
  );
};

export default Map;

