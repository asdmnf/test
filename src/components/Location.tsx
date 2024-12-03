type Location = {
  lat: number;
  lng: number;
  address: string;
};

const Location = ({ location }: { location: Location }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Location</h2>
      <div>
        <iframe
          title="Google Maps"
          src={`https://www.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
          width="100%"
          height="300"
          className="rounded-lg border"
        ></iframe>
        <p className="mt-2">{location.address}</p>
      </div>
    </div>
  );
};

export default Location;
