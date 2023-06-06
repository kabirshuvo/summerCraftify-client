

const SectionTitle = ({heading, title}) => {
    return (
        <div className="w-1/2 capitalize mx-auto text-center ">
            <p className="text-sm text-warning text-opacity-80">{title}</p>
            <h2 className="text-2xl uppercase text-info mt-11 text-opacity-70 border-y-2 py-4 border-slate-700">{heading}</h2>
        </div>
    );
};

export default SectionTitle;