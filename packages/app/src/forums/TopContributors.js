import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box';
import { Query, Loading, Error } from 'react-admin';
import Emoji from '@approbado/lib/components/Emoji'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const payload = {
    pagination: { page: 1, perPage: 5 },
    sort: { field: 'comments', order: 'DESC'}
};

const useStyles = makeStyles(theme => ({
    title: {
        fontWeight: '700',
        fontSize: '1.5rem',
        marginBottom: '2rem'
    },
    container: {
        padding: '1.6rem 0.4rem',
        color: theme.palette.info.light,
        borderTop: '1px solid rgba(0, 0, 0, 0.12)'
    },
    postTitle: {
        color: theme.palette.primary.main,
        fontWeight: 600,
        cursor: 'pointer',
        fontSize: '1rem',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    username: {
        marginLeft: '0.2rem',
        fontWeight: '600',
        cursor: 'pointer',
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    description: {
        paddingTop: '1rem',
        display: 'flex',
        fontSize: '0.9rem'
    }
}))

const AsideBar = ({ isXSmall }) => {
    const classes = useStyles();

    return (
        <Box>
            {!isXSmall && (
                <Box p='0 0 0 2rem'>
                    <Typography component="div">
                        <Box sx={{ fontWeight: '700', fontSize: '1.5rem' }}>
                            {'Top - Contribuidores'}
                        </Box>
                    </Typography>
                    <Typography component="div">
                        <Box sx={{ fontWeight: '400', fontSize: '1rem' }}>
                            {'Personas que comentaron debates y compartieron conocimientos en el foro.'}
                        </Box>
                    </Typography>
                    <Query type='getList' resource='forums' payload={payload}>
                        {({ data, total, loading, error }) => {
                            if (loading) { return null; }
                            if (error) { return null; }

                            return (
                                <div>
                                    {data.map(post =>
                                        <Box className={classes.container}>
                                            <Box className={classes.innerContent}>
                                                <Link
                                                    className={classes.postTitle}
                                                    to={`/forums/${post.id}/show`}
                                                >
                                                    {post.message}
                                                </Link>
                                                <Box className={classes.description}>
                                                    Por
                                                    <Link
                                                        className={classes.username}
                                                        to={`/users/${post.owner.id}/show`}
                                                    >
                                                        {post.owner.names}
                                                    </Link>
                                                </Box>
                                            </Box>
                                        </Box>
                                    )}
                                    {(total == 0) && (
                                        <Box className={classes.description}>
                                            <Typography component={'p'} variant="body1">
                                                No tenemos contribuidores disponibles
                                                {' '}
                                                <Emoji symbol="😔" />
                                            </Typography>
                                        </Box>
                                    )}
                                </div>
                            );
                        }}
                    </Query>
                </Box>
            )}
        </Box>
    );
}

AsideBar.propTypes = {
    isXSmall: PropTypes.bool
}

export default AsideBar
