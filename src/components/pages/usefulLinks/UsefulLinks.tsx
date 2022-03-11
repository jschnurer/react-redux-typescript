const links = [
  "https://google.com",
  "https://bing.com",
  "https://duckduckgo.com",
];

const UsefulLinks: React.FC = () =>
  <div>
    <h1>Useful Links</h1>

    <p>
      Here are some useful links:
    </p>
    
    <ul>
      {links.map(link => (
        <li
          key={link}
        >
          <a href={link}>{link}</a>
        </li>
      ))}
    </ul>
  </div>;

export default UsefulLinks;