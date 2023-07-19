
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';

const GfGApp = () => {
    const header = ['Nombre', 'Tema', 'Galletas', 'Restante $', 'Entrega']
    const data = [
        ['Juan Perez', 'Superheroes', '12', '350', '28/06/2023'],
        ['Juan Perez', 'Superheroes', '12', '350', '28/06/2023'],
        ['Juan Perez', 'Superheroes', '12', '350', '28/06/2023'],
  
    ]
  
    return (
        <View style={{ marginTop: 200 }}>
            <Text style={{ fontSize: 18 }}>
                Segumiento de pedidos</Text>
            <Table borderStyle={{ borderWidth: 2, 
                borderColor: '#c8e1ff' }}>
                <Row data={header} />
                <Rows data={data} />
            </Table>
        </View>
    );
};
  
export default GfGApp;