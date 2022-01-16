// Copyright (c) 2019, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.
import 'package:flutter/material.dart';
void main() => runApp(MyApp());
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.lightBlue,
        //brightness: Brightness.dark,
      ),
      home: const MyHomePage(title: 'Principal'),
    );
  }
}
class MyHomePage extends StatefulWidget {
  final String title;
  const MyHomePage({
    Key? key,
    required this.title,
  }) : super(key: key);
  @override
  _MyHomePageState createState() => _MyHomePageState();
}
class _MyHomePageState extends State<MyHomePage> {

  final userkey = GlobalKey<FormState>();
  final passkey = GlobalKey<FormState>();
  final usercontroller = TextEditingController();
  final passcontroller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Image.asset('assets/imagenes/forestlover.png'),
              TextFormField(
                key: userkey,
                controller: usercontroller,
                validator: (value) {
                  if (value=="") {
                    return 'Please enter some text';
                  }
                },
                decoration: InputDecoration(
                    border: OutlineInputBorder(), labelText: 'Usuario'),

              ),
              TextFormField(
                  key: passkey,
                  controller: passcontroller,
                  validator: (value) {
                    if (value=="") {
                      return 'Please enter some text';
                    }
                  },
                  obscureText: true,
                  decoration: InputDecoration(

                      border: OutlineInputBorder(), hintText: 'Su clave')),

              ElevatedButton(
                style: ButtonStyle(
                  foregroundColor: MaterialStateProperty.all<Color>(Colors.white),
                ),
                onPressed: () {
                  if(usercontroller.text=="developer" && passcontroller.text=="@instagram22"){
                    ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text("Acceso correcto"))
                    );
                  }else{
                    ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text("Datos incorrectos"))
                    );
                  }

                },
                child: Text('Iniciar Sesión'),
              ),

            ],
          ),
        )
    );
  }
}