import React, { useState } from "react";

import { Card, VideoElement } from "dr066-ba-development-system";
import { StateElement } from "../index";
import video from "./camera.mp4";

export function StateElementCard({ devices, title, detail }) {
  function getLightObj(lights) {
    const lightObj = {
      type: "light",
      name: "Helligkeit",
      unit: "%",
      string: "An",
    };
    let deviceCount = 0;
    let value = 0;
    lights.forEach((light) => {
      if (light.attributes[0].value) {
        deviceCount++;
        value += light.attributes[1].value;
      }
    });
    lightObj.devices = deviceCount;
    lightObj.value = Math.floor(value / deviceCount) || 0;

    return lightObj;
  }

  function getHeatingObj(heatings, thermostats) {
    const heatingObj = {
      type: "heating",
      name: "Temperatur",
      unit: "°C",
      string: "An",
    };
    let deviceCount = 0;
    let value = 0;

    thermostats.forEach((thermostat) => {
      value = thermostat.attributes[0].value;
    });
    heatings.forEach((heating) => {
      if (heating.attributes[0].value) {
        deviceCount++;
        value = heating.attributes[1].value;
      }
    });

    value = Math.min(28, Math.max(8, value));

    heatingObj.devices = deviceCount;
    heatingObj.value = Math.floor(value) || 0;

    return heatingObj;
  }

  function getHumiditytObj(humidities, windows) {
    const humidityObj = {
      type: "humiditiy",
      name: "Luftfeuchtigkeit",
      unit: "%",
      string: "Offen",
    };
    let deviceCount = 0;
    let value = 0;
    humidities.forEach((humidity) => {
      if (humidity.attributes[1].value) {
        deviceCount++;
        value += humidity.attributes[1].value;
      }
    });

    humidityObj.devices = 0;
    humidityObj.value = Math.floor(value / deviceCount) || 0;

    return humidityObj;
  }

  function getGarageObj(garages) {
    const garageObj = {
      type: "garage",
      name: "Garage",
      unit: "%",
      string: "Offen",
    };
    let deviceCountOpen = 0;
    let deviceCountClosed = 0;
    let value = 0;
    garages.forEach((garage) => {
      if (garage.attributes[0].value) {
        deviceCountOpen++;
        value = 100;
      } else {
        deviceCountClosed++;
      }
    });

    if (!deviceCountOpen) {
      garageObj.devices = deviceCountClosed;
      garageObj.string = "Zu";
    } else {
      garageObj.devices = deviceCountOpen;
    }
    garageObj.value = value;

    return garageObj;
  }

  function getCameraObj(cameras) {
    const cameraObj = {
      type: "camera",
      name: "Kamera",
      value: "An",
      string: "An",
    };
    let deviceCountOn = 0;
    let deviceCountOff = 0;
    let cameraStreams = 0;
    cameras.forEach((camera) => {
      if (camera.attributes[0].value) {
        deviceCountOn++;
        cameraStreams++;
      } else {
        deviceCountOff++;
      }
    });

    if (!deviceCountOn) {
      cameraObj.devices = deviceCountOff;
      cameraObj.value = "Aus";
      cameraObj.string = "Aus";
    } else {
      cameraObj.devices = deviceCountOn;
    }

    return {
      cameraObj: cameraObj,
      cameraStreams: cameraStreams,
    };
  }

  function getOverview(devices) {
    const overview = [];

    let lights = devices.filter(
      (d) => d.type === "light" && d.disabled === false
    );
    if (lights.length) {
      overview.push(getLightObj(lights));
    }

    let heatings = devices.filter(
      (d) => d.type === "heating" && d.disabled === false
    );
    let thermostats = devices.filter(
      (d) => d.type === "thermostat" && d.disabled === false
    );
    if (heatings.length || thermostats.length) {
      overview.push(getHeatingObj(heatings, thermostats));
    }

    let humidities = devices.filter(
      (d) => d.type === "thermostat" && d.disabled === false
    );
    let windows = devices.filter(
      (d) => d.type === "window" && d.disabled === false
    );
    if (humidities.length || windows.length) {
      overview.push(getHumiditytObj(humidities, windows));
    }

    let garages = devices.filter(
      (d) => d.type === "garage" && d.disabled === false
    );
    if (garages.length) {
      overview.push(getGarageObj(garages));
    }

    let cameras = devices.filter(
      (d) => d.type === "camera" && d.disabled === false
    );
    if (cameras.length) {
      let c = getCameraObj(cameras);
      overview.push(c.cameraObj);
      if (detail) {
        for (let i = 0; i < c.cameraStreams; i++) {
          overview.push({ type: video });
        }
      }
      overview.push();
    }
    return overview;
  }

  const overviews = getOverview(devices);
  return (
    <Card title={title} col colCount={detail ? undefined : 3}>
      {overviews.map((overview, index) =>
        overview.type != video ? (
          <StateElement
            state={overview}
            key={index}
            detail={detail}></StateElement>
        ) : (
          <VideoElement key={index} src={video} />
        )
      )}
    </Card>
  );
}
