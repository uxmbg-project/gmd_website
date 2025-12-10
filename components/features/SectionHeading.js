const SectionHeading = ({ sectiontitle, subtitle }) => {
  return (
    <div className="text-center mb-8 mt-8">
      <h2 className="text-gray-900 dark:text-gray-100 font-extrabold text-3xl md:text-4xl">
        {sectiontitle}
      </h2>
      {/* Red underline / accent line */}
      <div className="mx-auto mt-2 w-24 h-1 bg-[#E62600] rounded"></div>

      {/* Optional subtitle / dynamic sentence */}
      {subtitle && (
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
