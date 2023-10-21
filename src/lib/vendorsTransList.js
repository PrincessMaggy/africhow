import transactionsdata from './vendorsTransData';

const filteredData = transactionsdata.filter(item => item.transstatus === 'pending');

const filteredDesignData = transactionsdata.filter(item => item.transstatus === 'settled');

const allMappedData = transactionsdata;

const transactions =[
  {
    id:1,
    tabtitle:"All",
    content: allMappedData

  },
  {
    id:2,
    tabtitle:"Pending",
    content: filteredData 
      
  },
  {
    id:3,
    tabtitle:"Settled",
    content: filteredDesignData
      
  }
];
export default transactions;