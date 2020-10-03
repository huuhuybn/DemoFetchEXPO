import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useState} from 'react'

export default function App() {

    const [data, setData] = useState();
    const key = "5dbe8ff588869c7d2cad6de077f5fcc6";

    // Sinh viên xây dựng ứng dụng đăng kí thông tin người dùng với
    // 4 ô nhập name, email, gender, status
    // nếu code trả về là 201 thì thông báo đã đăng kí thành công
    // còn code 422 thì thông báo email đã tồn tại
    // trường hợp còn lại thông báo lỗi

    function a() {
        const data = {
            id: 1,
            name: "Sushil Ahluwalia Esq.",
            email: "huuhuyfdgdgfdbhhhhbndfffff@gmail.com",
            gender: "Female",
            status: "Inactive"
        }
        fetch('https://gorest.co.in/public-api/users', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 5812c0a20380e83e41a13f5a7d7bfc13339d2841d39708aa2092c7dde41854f1'
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                alert(data.code)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <View style={styles.container}>
            <Text>{data}</Text>

            <Button
                title='Send a Post'
                onPress={() => {
                    a()
                }}
            />
            <StatusBar style="auto"/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
