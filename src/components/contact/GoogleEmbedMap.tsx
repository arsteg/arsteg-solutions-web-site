// components/GoogleEmbedMap.jsx
export default function GoogleEmbedMap({ lat = 28.4152475, lng = 76.9631498, zoom = 12, width = '100%', height = '400px' }) {
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
  return (
    <div style={{ width, height }}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="Location map"
      />
    </div>
  );
}
