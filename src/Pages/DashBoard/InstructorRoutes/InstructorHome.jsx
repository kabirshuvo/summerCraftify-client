
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useTitle from '../../../hooks/useTitle';

const InstructorHome = () => {
    useTitle('InstructorHome || summerCraftify');
    
    return (
        <div className='w-full py-16'>
            <SectionTitle title='Instructors Only' heading='Instructors home'></SectionTitle>
        </div>
    );
};

export default InstructorHome;