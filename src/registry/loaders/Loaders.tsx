import React from 'react';
import './Loaders.css';

export function SpiralLoader() {
  return (
    <div className="rs-spiral-loader">
      <div className="rs-spiral-outer" />
      <div className="rs-spiral-inner" />
    </div>
  );
}

export function PulseDots() {
  return (
    <div className="rs-pulse-dots">
      <div className="rs-pulse-dot" />
      <div className="rs-pulse-dot" />
      <div className="rs-pulse-dot" />
    </div>
  );
}

export function AtomLoader() {
  return (
    <div className="rs-atom-loader">
      <div className="rs-atom-nucleus" />
      <div className="rs-atom-orbit rs-atom-orbit--1" />
      <div className="rs-atom-orbit rs-atom-orbit--2" />
      <div className="rs-atom-orbit rs-atom-orbit--3" />
    </div>
  );
}
