interface IIcons {
  icon: string;
  title: string;
  key: number;
}

function IconSets({ icon, title, key }: IIcons) {
  return (
    <div
      key={key}
      className="py-2 px-4 bg-gray-50 m-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer w-40 md:w-48"
    >
      <img alt="" src={icon} className="w-12" />
      <h4 className="text-md ml-4">{title}</h4>
    </div>
  );
}

export default IconSets;
