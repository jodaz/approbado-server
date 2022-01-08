import * as React from 'react'
import ForumsListView from '@approbado/lib/layouts/forums/ForumsListView'

const Publications = ({ id }) => (
    <ForumsListView filterDefaultValues={{ user_id: id }} />
);

export default Publications;
