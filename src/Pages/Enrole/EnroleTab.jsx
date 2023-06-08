import ClassCard from "../../components/ClassCard/ClassCard";


const EnroleTab = ({classes}) => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-7 mb-40">
         {classes.map((cls) => (
            <ClassCard key={cls.id} cls={cls}></ClassCard>
          ))}
         </div>
        </div>
    );
};

export default EnroleTab;