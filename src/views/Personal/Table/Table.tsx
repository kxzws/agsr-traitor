import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableTemplate from '@mui/material/Table';
import Checkbox from '@mui/material/Checkbox';
import { TableData } from '../../../api/types';
import { ITableProps } from '../../../types/interfaces';
import loupe from '../../../assets/svg/loupe.svg';
import './Table.scss';

const ROWS_LIMIT = 10;

const Table = (props: ITableProps) => {
  const { data, loadData, isLoading } = props;

  const [selectedRows, setSelectedRows] = useState<TableData[]>([]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const isSelected = (id: number) => selectedRows.filter((row) => row.id === id).length > 0;

  const handleSelectAllClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedRows(data);
      return;
    }
    setSelectedRows([]);
  };

  const handleClick = (e: React.MouseEvent<unknown>, row: TableData) => {
    const isRowSelected = isSelected(row.id);
    let newSelectedRows = selectedRows.slice();

    if (!isRowSelected) {
      newSelectedRows.push(row);
    } else {
      newSelectedRows = newSelectedRows.filter((item) => item.id !== row.id);
    }

    setSelectedRows(newSelectedRows);
  };

  return isLoading ? (
    <div className="table">
      <CircularProgress color="inherit" sx={{ mx: '50%', mt: 10 }} />
    </div>
  ) : (
    <div className="table">
      <h4 className="table__title">Таблица с данными</h4>

      <TableContainer
        sx={{
          maxWidth: '1170px',
          border: '1px solid #ededf4',
          borderRadius: '5px',
        }}
      >
        <TableTemplate aria-label="table">
          <TableHead>
            <TableRow className="table__row">
              <TableCell width="44" align="center">
                <Checkbox
                  color="primary"
                  indeterminate={selectedRows.length > 0 && selectedRows.length < ROWS_LIMIT}
                  checked={ROWS_LIMIT > 0 && selectedRows.length === ROWS_LIMIT}
                  onChange={handleSelectAllClick}
                  inputProps={{
                    'aria-label': 'select all desserts',
                  }}
                  sx={{ p: 0 }}
                />
              </TableCell>
              <TableCell width="280">
                <img src={loupe} alt="loupe: search" className="table_img" />
                Имя ЭС
              </TableCell>
              <TableCell width="200">
                <img src={loupe} alt="loupe: search" className="table_img" />
                Метка ЭС
              </TableCell>
              <TableCell width="246">
                <img src={loupe} alt="loupe: search" className="table_img" />
                Наименование ИС / ИР
              </TableCell>
              <TableCell width="300" align="center">
                <img src={loupe} alt="loupe: search" className="table_img" />
                Наименование ИС/ИР
              </TableCell>
              <TableCell width="100" align="center">
                Эталон
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row, index) => {
              const isItemSelected = isSelected(row.id);

              return (
                <TableRow
                  key={`${row.name}${index + 1}`}
                  className="table__row"
                  role="checkbox"
                  aria-checked={isItemSelected}
                  selected={isItemSelected}
                  onClick={(event) => handleClick(event, row)}
                  hover
                  sx={{
                    '&:nth-of-type(2n)': {
                      backgroundColor: `${isItemSelected ? 'rgba(25, 118, 210, 0.08)' : '#fcfcfc'}`,
                    },
                  }}
                >
                  <TableCell scope="row" align="center">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{
                        'aria-labelledby': `cell-${index}`,
                      }}
                      sx={{ p: 0 }}
                    />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.mark}</TableCell>
                  <TableCell>{row.infSystemNameRU}</TableCell>
                  <TableCell align="center">
                    {row.infSystemNameEN ? row.infSystemNameEN : '—'}
                  </TableCell>
                  <TableCell align="center">{row.standard ? '+' : '-'}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </TableTemplate>
      </TableContainer>
    </div>
  );
};

export default Table;
