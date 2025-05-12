
declare global {
  interface Window {
    google: {
      maps: {
        Map: any;
        Marker: any;
        LatLng: any;
        SymbolPath: any;
        NavigationControl: any;
        InfoWindow: any;
        MapTypeControlStyle: any;
        ControlPosition: any;
      };
    };
    initGoogleMap: () => void;
  }
}

export {};
