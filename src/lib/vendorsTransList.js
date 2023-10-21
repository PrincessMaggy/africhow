import transactionsdata from './vendorsTransData';

const filteredPendingData = transactionsdata.filter(item => item.transstatus === 'pending');

const filteredSettledData = transactionsdata.filter(item => item.transstatus === 'settled');

const firstthreeData = transactionsdata.slice(0, 3);

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