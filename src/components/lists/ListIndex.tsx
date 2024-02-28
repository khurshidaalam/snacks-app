import React from 'react';
import {
    Box, Button,
    DeleteIcon,
    DuplicateIcon, EditIcon, IconButton, Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "convertupleads-theme";

const ListIndex: React.FC = () => {
    return (
        <>
        <Box p={3} sx={{maxWidth: 700, margin:'auto'}}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} mb={2}>
                <Typography variant={"h5"}>ABC</Typography>
                <Button>Add New Entry</Button>
            </Stack>
            <TableContainer>
                <Table variant={"normal"}>
                    <TableHead>
                        <TableRow>
                            <TableCell>weeks</TableCell>
                            <TableCell>actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>week 1</TableCell>
                            <TableCell>
                                <IconButton><EditIcon/></IconButton>
                                <IconButton><DuplicateIcon/></IconButton>
                                <IconButton><DeleteIcon/></IconButton>
                            </TableCell>
                        </TableRow>
                        <TableCell>

                        </TableCell>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
        </>
    );
};

export default ListIndex;