import { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { MapPin } from "lucide-react";
import type { BlogPostLocation } from "@/data/posts";
import "leaflet/dist/leaflet.css";

interface LocationMapProps {
  locations: BlogPostLocation[];
}

const pinIcon = L.divIcon({
  className: "",
  html: `<svg width="28" height="38" viewBox="0 0 28 38" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 0C6.3 0 0 6.3 0 14c0 10.5 14 24 14 24s14-13.5 14-24c0-7.7-6.3-14-14-14z" fill="hsl(20 65% 45%)" stroke="hsl(30 33% 96%)" stroke-width="1.5"/>
    <circle cx="14" cy="14" r="5" fill="hsl(30 33% 96%)"/>
  </svg>`,
  iconSize: [28, 38],
  iconAnchor: [14, 38],
  popupAnchor: [0, -34],
});

const LocationMap = ({ locations }: LocationMapProps) => {
  const bounds = useMemo<L.LatLngBoundsExpression>(
    () => locations.map((l) => [l.lat, l.lng] as [number, number]),
    [locations]
  );
  const center = useMemo<[number, number]>(
    () => (locations.length > 0 ? [locations[0].lat, locations[0].lng] : [0, 0]),
    [locations]
  );

  if (!locations || locations.length === 0) return null;

  return (
    <div className="rounded-lg border border-border overflow-hidden bg-secondary/30">
      <div className="relative aspect-[16/9] grayscale sepia-[.35] contrast-125 brightness-95">
        <MapContainer
          center={center}
          bounds={locations.length > 1 ? bounds : undefined}
          zoom={locations.length === 1 ? 9 : undefined}
          boundsOptions={{ padding: [30, 30] }}
          scrollWheelZoom={false}
          dragging={false}
          doubleClickZoom={false}
          attributionControl={false}
          className="w-full h-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {locations.map((l) => (
            <Marker key={l.name} position={[l.lat, l.lng]} icon={pinIcon}>
              <Popup>{l.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none" />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3">
        {locations.map((l) => (
          <span
            key={l.name}
            className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground inline-flex items-center gap-1.5"
          >
            <MapPin className="w-3.5 h-3.5 text-primary" />
            {l.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LocationMap;
