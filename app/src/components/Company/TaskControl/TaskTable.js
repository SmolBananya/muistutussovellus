import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import API from '../../../Actions/API';

import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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

<<<<<<< HEAD
const CompanyTaskTable = ({ tasks, setTasks, currentDate, setCurrentDate }) => {
=======
const CompanyTaskTable = ({ tasks, setTasks, days, setDays, currentDate, setCurrentDate }) => {
>>>>>>> master
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('');

    const gettasks = async (val) => {
<<<<<<< HEAD
        val === 1
            ? setCurrentDate(moment(currentDate).add(1, 'days'))
            : setCurrentDate(moment(currentDate).subtract(1, 'days'));
        setErrorText('');
        setLoading(true);

        let res;
        val === 1
            ? (res = await API.gettasks({ pvm: moment(currentDate).add(1, 'days').format('YYYY-MM-DD').toString() }))
            : (res = await API.gettasks({
                  pvm: moment(currentDate).subtract(1, 'days').format('YYYY-MM-DD').toString(),
              }));
=======
        val === 1 ? setDays(days + 1) : setDays(days - 1);
        setErrorText('');
        setLoading(true);
        const res = await API.gettasks({ pvm: currentDate.format('YYYY-MM-DD').toString() });
>>>>>>> master

        if (res.status === 200) {
            if (!res.data.error) {
                setTasks(res.data);
                console.log(res.data);
                setLoading(false);
            } else {
                setErrorText(res.data.error);
                setTasks([]);
                setLoading(false);
            }
            setLoading(false);
        }
    };
    useEffect(() => {
<<<<<<< HEAD
        gettasks();
=======
        //setCurrentDate(moment(new Date()).add(days, 'days'));
        console.log('days ', days);
        // gettasks();
>>>>>>> master
    }, []);

    return (
        <>
            {loading ? (
                <LoadingAnimation />
            ) : (
                <>
                    <Grid container direction='row' justify='center' alignItems='center' spacing={1}>
                        <Grid item xs={2} style={{ textAlign: 'center' }}>
                            <ArrowLeft onClick={() => gettasks(0)} />
                        </Grid>
                        <Grid item xs='auto'>
                            <Text align='center' size={16} weight={500} maincolor>
                                {currentDate.format('DD.MM.YYYY').toString()}
                            </Text>
                        </Grid>

                        <Grid item xs={2} style={{ textAlign: 'center' }}>
                            <ArrowRight onClick={() => gettasks(1)} />
                        </Grid>
                    </Grid>
                    {errorText ? (
                        <Text align='center' size={12} weight={400}>
                            {errorText}
                        </Text>
                    ) : (
                        <>
                            <Grid item xs={12}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TH align='left'></TH>
                                            <TH colSpan='100%' align='left'>
                                                Tehtävä
                                            </TH>
                                            <TH align='center'>Pisteet</TH>
                                            <TH align='center'>Tavoite</TH>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {tasks.map((t) => (
                                            <TableRow>
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
                                <Button color={1}>Poista valittu</Button>
                            </Grid>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default CompanyTaskTable;
