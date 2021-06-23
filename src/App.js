import './App.css';
import {Container} from "semantic-ui-react";
import MainHeader from "./components/main-header";
import Balance from "./components/Balance";
import Balances from "./components/Balances";
import {useEffect, useState} from "react";
import EntryLines from "./components/EntryLines";
import EntryForm from "./components/EntryForm";
import EditModal from "./components/EditModal";

function App() {
    const [entries, setEntries] = useState(initialEntries);
    const [desc, setDesc] = useState('');
    const [value, setValue] = useState('');
    const [isExpensive, setIsExpensive] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [entryId, setEntryId] = useState();
    const deleteEntry = (id) => {
        const result = entries.filter(entry => entry.id !== id);
        setEntries(result);
    }
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    const [total, setTotal] = useState(0);

    const editEntry = (id) => {
        if (id) {
            setIsOpen(true);
            setEntryId(id);
            const index = entries.findIndex(entry => entry.id === id);
            if (index > -1) {
                setDesc(entries[index].desc);
                setValue(entries[index].value);
                setIsExpensive(entries[index].isExpensive);
            }
        }
    }

    useEffect(() => {
        if (!isOpen && entryId) {
            const index = entries.findIndex(entry => entry.id === entryId);
            const newEntries = [...entries];
            newEntries[index] = {
                desc,
                value,
                isExpensive
            };
            setEntries(newEntries);
            resetEntries();
        }
    }, [isOpen]);

    useEffect(() => {
        let totalExpenses = 0;
        let totalIncomes = 0;
        entries.map(entry => {
            if (entry.isExpensive) {
                return totalExpenses += Number(entry.value);
            }

            return totalIncomes += Number(entry.value);
        })
        setTotalIncome(Math.round(totalIncomes));
        setTotalExpense(Math.round(totalExpenses));
        setTotal(Math.round(totalIncomes - totalExpenses));
    }, [entries]);


    const addEntry = () => {
        const result = entries.concat([{
            id: entries.length + 1,
            desc,
            value,
            isExpensive
        }]);
        setEntries(result);
        resetEntries();
    }

    const resetEntries = () => {
        setDesc('');
        setValue('');
        setIsExpensive(true);
    }

    return (
        <Container>
            <MainHeader title="Budget" style={{marginTop: '20px'}}/>
            <Balance type="Your Balance:" value={total} size='small'/>

            <Balances totalIncome={totalIncome} totalExpense={totalExpense}/>

            <MainHeader title='History' type='h3'/>

            <EntryLines entryList={entries} deleteEntry={deleteEntry} editEntry={editEntry}/>

            <MainHeader type='h3' title='Add new transaction form'/>
            <EntryForm
                addEntryItem={addEntry}
                isExpensive={isExpensive}
                desc={desc}
                value={value}
                setIsExpensive={setIsExpensive}
                setValue={setValue}
                setDesc={setDesc}/>
            <EditModal isOpen={isOpen} setIsOpen={setIsOpen}
                       isExpensive={isExpensive}
                       desc={desc}
                       value={value}
                       setIsExpensive={setIsExpensive}
                       setValue={setValue}
                       setDesc={setDesc}/>
        </Container>
    );
}

export default App;

let initialEntries = [
    {
        id: 1,
        desc: 'Work Income',
        value: 2300.4,
        isExpensive: false
    },
    {
        id: 2,
        desc: 'Pay Bills',
        value: 600.4,
        isExpensive: true
    },
    {
        id: 3,
        desc: 'Groceries',
        value: 200.4,
        isExpensive: true
    },
    {
        id: 4,
        desc: 'Home Loan',
        value: 200.4,
        isExpensive: true
    }
]
