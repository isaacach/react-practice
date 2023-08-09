import Link from "./Link";

export default function Sidebar() {
  const links = [
    { label: 'Dropdown', path: '/'},
    { label: 'Button', path: '/button'},
    { label: 'Accordion', path: '/accordion'}
  ];

  const renderedLinks = links.map((link) => {
    return <Link 
            key={link.label} 
            to={link.path} 
            className='mb-3' 
            activeClassName='font-bold border-l-4 border-blue-500 pl-3'
          >{link.label}</Link>
  });

  return (
    <div className="sticky top-0 flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}