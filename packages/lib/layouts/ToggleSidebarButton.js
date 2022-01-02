import * as React from 'react';
import {
    Tooltip,
    IconButton,
    makeStyles
} from '@material-ui/core';
import { toggleSidebar } from 'react-admin';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as MenuIcon } from '@approbado/lib/icons/Menu.svg'

const useStyles = makeStyles(theme => ({
    menuButton: {
        color: `${theme.palette.primary.main} !important`,
        marginLeft: '0.55em'
    }
}));

const ToggleSidebarButton = () => {
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Tooltip
            title={open ? 'Cerrar menú' : 'Abrir menú'}
            enterDelay={500}
        >
            <IconButton
                color="inherit"
                onClick={() => dispatch(toggleSidebar())}
                className={classNames(classes.menuButton)}
            >
                <MenuIcon />
            </IconButton>
        </Tooltip>
    );
};

export default ToggleSidebarButton;
