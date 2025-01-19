import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store'; 
import { Submission } from '../../interfaces';

export default function SubmissionsTable() {
    const submissions: Submission[] = useSelector((state: RootState) => state.contactForm.submissions);

    return (
        <div className="pb-25 px-4 lg:px-15 desktop:px-[132px]">
            <h3 className="text-3xl font-bold mb-5">Testing</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b text-left">First Name</th>
                            <th className="px-4 py-2 border-b text-left">Last Name</th>
                            <th className="px-4 py-2 border-b text-left">Email</th>
                            <th className="px-4 py-2 border-b text-left">Phone</th>
                            <th className="px-4 py-2 border-b text-left">Subject</th>
                            <th className="px-4 py-2 border-b text-left">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.length > 0 ? (
                            submissions.map((submission, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="text-center px-4 py-2 border-b">{submission.firstName}</td>
                                    <td className="text-center px-4 py-2 border-b">{submission.lastName}</td>
                                    <td className="text-center px-4 py-2 border-b">{submission.email}</td>
                                    <td className="text-center px-4 py-2 border-b">{submission.phone}</td>
                                    <td className="text-center px-4 py-2 border-b">{submission.subject}</td>
                                    <td className="text-center px-4 py-2 border-b">{submission.message}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="text-center py-4">No Submissions Available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
