type HeaderCardProps = {
  title: string;
  subtitle: string;
};

export const HeaderCard = ({ title, subtitle }: HeaderCardProps) => (
    <div className="flex flex-col items-center gap-3 rounded-4xl border border-gray-200 bg-white p-6 md:p-8">
      <h1 className="font-medium text-3xl">{title}</h1>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
