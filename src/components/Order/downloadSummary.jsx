import {CSVLink} from 'react-csv';

function ExportCSVButton({data, filename}) {
    const flattenedOrderList = data.map((order) => {
        const {
            id,
            orderId,
            customerName,
            restaurant,
            orderDate,
            status,
            orderedItems,
        } = order;
        const items = orderedItems.map(
            (item) => item.item + ` (${item.quantity})`,
        );
        return {
            id,
            orderId,
            customerName,
            restaurant,
            orderDate,
            status,
            orderedItems: items.join(', '), // Flatten nested items
        };
    });

    return (
        <CSVLink data={flattenedOrderList} filename={filename} target='_blank'>
            <button>Download order summary</button>
        </CSVLink>
    );
}

export default ExportCSVButton;
