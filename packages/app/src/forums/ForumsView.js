import * as React from 'react'
// Components
import { useMediaQuery } from '@material-ui/core'
import TabbedList from '@approbado/lib/components/TabbedList'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@approbado/lib/components/Button'
import { useDialogDispatch } from "@approbado/lib/hooks/useDialogStatus"
import ForumCreate from './ForumCreate'
import { ListBase, useListContext } from 'react-admin'
import ForumCard from './ForumCard'
import ForumWarning from './ForumWarning'
import TopContributors from './TopContributors'

const ForumList = props => (
    <ListBase
        resource="forums"
        basePath="/forums"
        {...props}
    >
        <ForumListView />
    </ListBase>
)

const tags = [
    {
        name: 'Populares',
        pathname: 'top',
        component: <ForumList sort={{ field: 'comments', order: 'DESC' }} />
    },
    {
        name: 'Nuevos',
        pathname: 'new',
        component: <ForumList sort={{ field: 'created_at', order: 'DESC' }} />
    },
    {
        name: 'No respondidos',
        pathname: 'unanswered',
        component: <ForumList filterDefaultValues={{ unanswered: true }} />
    },
]

const ForumListView = () => {
    const { ids, data, total } = useListContext();

    return (
        <Box display="flex">
            <Box width={'100%'}>
                {ids.map((id, i) => (
                    <ForumCard
                        data={data[id]}
                        id={id}
                        index={i}
                        key={id}
                    />
                ))}
                {(total == 0) && (
                    <Typography component={'p'} variant="body1">
                        No tenemos debates disponibles, ¿quizás desees volver más tarde?
                    </Typography>
                )}
            </Box>
            <ForumWarning />
        </Box>
    )
}

const ForumsView = () => {
    const isXSmall = useMediaQuery(theme =>
        theme.breakpoints.down('xs')
    )
    const { setDialog } = useDialogDispatch('forums.warning')

    return (
        <Box display="flex" p={isXSmall ? '0' : '2rem 0'}>
            <Box width='100%' p='0 2rem 0 0'>
                <Box
                    display="flex"
                    justifyContent="space-between"
                >
                    {!isXSmall && (
                        <Typography component="div">
                            <Box sx={{ fontWeight: '700', fontSize: '1.5rem' }}>
                                {'Debates en Approbado'}
                            </Box>
                        </Typography>
                    )}
                    <Box sm='3'>
                        <Button onClick={setDialog}>
                            {'Iniciar un debate'}
                        </Button>
                    </Box>
                </Box>
                <TabbedList tags={tags} />
            </Box>
            <TopContributors isXSmall={isXSmall} />
            <ForumCreate />
        </Box>
    )
}

export default ForumsView