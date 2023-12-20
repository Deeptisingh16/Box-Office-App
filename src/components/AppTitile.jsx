export default function AppTitle(props) {
  const { title = 'BOX Office', subtitle = 'Searc Movies Here' } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
