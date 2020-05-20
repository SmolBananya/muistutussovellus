import React, { useState, useEffect, useContext, useRef } from 'react';
import { TaskControlContext } from '../../../Context/TaskControlContext';
import { UserContext } from '../../../Context/UserContext';
import styled from 'styled-components';
import API from '../../../Actions/API';

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow1 from '@material-ui/core/TableRow';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LoadingAnimation from '../../../Misc/Loading';

import Text from '../../Shared/Text';
import Button from '../../Shared/Button';

import moment from 'moment';

const ArrowLeft = styled(ArrowBackIcon)`
    && {
        fill: ${(props) => props.theme.colors.main};
        font-size: calc(1em + 2vmin);
        vertical-align: text-bottom;
        cursor: pointer;
    }
`;
const ArrowRight = styled(ArrowForwardIcon)`
    && {
        fill: ${(props) => props.theme.colors.main};
        font-size: calc(1em + 2vmin);
        vertical-align: text-bottom;
        cursor: pointer;
    }
`;

const TH = styled(TableCell)`
    &&& {
        width: auto;
        padding: 8px;
        font-family: 'Roboto', Helvetica, Arial, sans-serif;
        font-size: calc(10px + 1vmin);
        font-weight: 500;
        color: ${(props) => props.theme.colors.main};
    }
`;
const TableRowTH = styled(TableRow1)`
    &&& {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
`;
const TableRow = styled(TableRow1)`
    &&& {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
        &:focus {
            background-color: rgba(0, 0, 0, 0.1);
        }
        &.Mui-selected {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
`;
const TD = styled(TableCell)`
    &&& {
        width: auto;
        padding: 8px;
        font-family: 'Roboto', Helvetica, Arial, sans-serif;
        font-size: calc(10px + 1vmin);
        font-weight: 400;
        color: ${(props) => props.theme.colors.text};
    }
`;
const CompanyTaskTable = () => {
    const { TASKLIST, DATE, LOADING } = useContext(TaskControlContext);
    const [taskList, setTaskList] = TASKLIST;
    const [date, setDate] = DATE;
    const [loading, setLoading] = LOADING;
    const [user, setUser] = useContext(UserContext);
    const [deleteid, setDeleteid] = useState('');

    const inputRef = useRef([]);

    const gettasks = async () => {
        setLoading(true);
        const res = await API.gettasks({ pvm: moment(date).format('YYYY-MM-DD').toString() }, user.JWTtoken);

        if (res.status === 200) {
            if (!res.data.error) {
                setTaskList(res.data);
            } else {
                setTaskList([]);
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        gettasks();
    }, [date]);

    const deletetask = async () => {
        const res = await API.deletetask(deleteid, user.JWTtoken);

        if (res.status === 200) {
            if (!res.data.error) {
                setTaskList(taskList.filter((t) => t.tehtävä_id !== deleteid));
            } else {
                console.log(res.data.error);
            }
        }
    };

    return (
        <>
            {loading ? (
                <LoadingAnimation />
            ) : (
                <>
                    <Grid container direction='row' justify='center' alignItems='center' spacing={1}>
                        <Grid item xs={2} style={{ textAlign: 'center' }}>
                            <ArrowLeft
                                onClick={() =>
                                    setDate(moment(date).subtract(1, 'days').format('YYYY-MM-DD').toString())
                                }
                            />
                        </Grid>
                        <Grid item xs='auto'>
                            <Text align='center' size={16} weight={500} maincolor>
                                {moment(date).format('DD.MM.YYYY').toString()}
                            </Text>
                        </Grid>

                        <Grid item xs={2} style={{ textAlign: 'center' }}>
                            <ArrowRight
                                onClick={() => setDate(moment(date).add(1, 'days').format('YYYY-MM-DD').toString())}
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Table>
                            <TableHead>
                                <TableRowTH>
                                    <TH align='left'></TH>
                                    <TH colSpan='100%' align='left'>
                                        Tehtävä
                                    </TH>
                                    <TH align='center'>Pisteet</TH>
                                    <TH align='center'>Tavoite</TH>
                                </TableRowTH>
                            </TableHead>
                            <TableBody>
                                {taskList.map((t, index) => (
                                    <TableRow
                                        ref={(el) => (inputRef.current[t.tehtävä_id] = el)}
                                        selected={deleteid === t.tehtävä_id ? true : false}
                                        key={t.tehtävä_id}
                                        onClick={() => setDeleteid(t.tehtävä_id)}
                                    >
                                        <TD align='left'>
                                            {t.pakollinen && (
                                                <img
                                                    style={{ width: '1em', verticalAlign: 'text-bottom' }}
                                                    src={require('../../../Images/SVG/P_icon.svg')}
                                                />
                                            )}
                                        </TD>
                                        <TD colSpan='100%' align='left'>
                                            {t.nimi}
                                        </TD>
                                        <TD align='center'>{t.pistemäärä}</TD>
                                        <TD align='center'>{t.tavoitemäärä}</TD>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                    <Grid item xs={12}>
                        <Button color={1} onClick={() => deletetask()}>
                            Poista valittu
                        </Button>
                    </Grid>
                </>
            )}
        </>
    );
};

export default CompanyTaskTable;
