import ClearIcon from '@mui/icons-material/Clear';

// const chooseItem = ['Áo thun', 'Áo khoác', '100.000 VND đến 199.000 VND'];

interface chooseOptionsProps {
    choose: any[];
}

export const ChooseOptions: React.FC<chooseOptionsProps> = ({ choose }) => {
    return (
        <div className="mb-8">
            {choose.map((item, index) => {
                return (
                    <div className="inline-block">
                        <div
                            key={index}
                            className="flex justify-between items-center w-max bg-gray-100 p-2 rounded mb-3 mr-3"
                        >
                            <p className="mr-5">{item}</p>
                            <ClearIcon className="hover:cursor-pointer hover:opacity-50" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
