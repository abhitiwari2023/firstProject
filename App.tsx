import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native'

const App = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [isForgotPassword, setIsForgotPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [nameTitle, setNameTitle] = useState('')
  const [emailTitle, setEmailTitle] = useState('')
  const [passwordTitle, setPasswordTitle] = useState('')

  const handleSubmit = () => {
    // Handle login or signup logic here
    console.log(isLogin ? 'Login' : 'Signup', { email, password, name })
  }

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot Password', { email })
  }

  const handleFacebookSignIn = () => {
    // Handle Facebook sign in logic here
    console.warn('Facebook Sign In')
  }

  const handleGoogleSignIn = () => {
    // Handle Google sign in logic here
    console.error('Google Sign In')
  }

  const renderForgotPasswordScreen = () => (
    <View style={styles.form}>
      <Text style={styles.title}>Forgot Password</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>{emailTitle}</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#0000FF"
          value={email}
          onChangeText={(text) => {
            setEmail(text)
            setEmailTitle(text ? "Email" : "")
          }}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsForgotPassword(false)}>
        <Text style={styles.switchText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  )

  const renderLoginSignupScreen = () => (
    <>
      <Text style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</Text>
      <View style={styles.form}>
        {!isLogin && (
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>{nameTitle}</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#007AFF"
              value={name}
              onChangeText={(text) => {
                setName(text)
                setNameTitle(text ? "Name" : "")
              }}
            />
          </View>
        )}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>{emailTitle}</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#007AFF"
            value={email}
            onChangeText={(text) => {
              setEmail(text)
              setEmailTitle(text ? "Email" : "")
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>{passwordTitle}</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#007AFF"
            value={password}
            onChangeText={(text) => {
              setPassword(text)
              setPasswordTitle(text ? "Password" : "")
            }}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Text style={styles.showHideText}>{showPassword ? "Hide" : "Show"}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
        </TouchableOpacity>
        {isLogin && (
          <TouchableOpacity onPress={() => setIsForgotPassword(true)} style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        )}
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or login with</Text>
          <View style={styles.dividerLine} />
        </View>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton} onPress={handleFacebookSignIn}>
            <Image source={require('./assets/facebook.png')} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={handleGoogleSignIn}>
            <Image source={require('./assets/google.png')} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      {isForgotPassword ? renderForgotPasswordScreen() : renderLoginSignupScreen()}
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={styles.bottomSwitchContainer}>
        <Text style={styles.switchText}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  form: {
    width: '100%',
    maxWidth: 400,
  },
  inputContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  inputTitle: {
    fontSize: 14,
    color: '#007AFF',
    marginTop: 0,
    backgroundColor: '#f5f5f5',
    marginStart: 5
  },
  input: {
    paddingVertical: 10,
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 10,

  },
  eyeIcon: {
    padding: 10,
    position: 'absolute',
    right: 5,
    top: 25,
  },
  showHideText: {
    color: '#007AFF',
    marginEnd: 10
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginEnd: 10,
    marginStart: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchText: {
    color: '#007AFF',
    fontSize: 16,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 16,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    width: '48%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialButtonText: {
    color: '#333',
    fontSize: 16,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#666',
    fontSize: 14,
  },
  bottomSwitchContainer: {
    position: 'absolute',
    bottom: 20,
  },
})

export default App