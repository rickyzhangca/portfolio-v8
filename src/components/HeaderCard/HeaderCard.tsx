type HeaderCardProps = {
  title: string;
  subtitle: string;
};

export const HeaderCard = ({ title, subtitle }: HeaderCardProps) => {
  return (
    <div className="flex flex-col items-center gap-3 rounded-4xl border border-gray-200 bg-white p-6 md:p-8">
      <h1 className="text-3xl font-medium">{title}</h1>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
};
