export function Label({ label }: { label: string }) {
  return (
    <label style={{ fontSize: "18px" }}>
      <b>{label}</b>
    </label>
  );
}
