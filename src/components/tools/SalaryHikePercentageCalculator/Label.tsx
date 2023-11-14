export function Label({ label }: { label: string }) {
  return (
    <label style={{ fontSize: "15px" }}>
      <b>{label}</b>
    </label>
  );
}
