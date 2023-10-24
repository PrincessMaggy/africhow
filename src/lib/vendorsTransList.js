//imports tranaction data object
import transactionsdata from './vendorsTransData';

//filters only pending transactions
const filteredPendingData = transactionsdata.filter(item => item.transstatus === 'pending');
//filters only settled transactions
const filteredSettledData = transactionsdata.filter(item => item.transstatus === 'settled');
//filters first 3 transactions
const firstthreeData = transactionsdata.slice(0, 3);

//object for filtered transaction according to transactionstatus
const transactions =[
  {
    id:1,
    tabtitle:"All",
    content: firstthreeData

  },
  {
    id:2,
    tabtitle:"Pending",
    content:  filteredPendingData 
      
  },
  {
    id:3,
    tabtitle:"Settled",
    content: filteredSettledData
      
  }
];
export default transactions;