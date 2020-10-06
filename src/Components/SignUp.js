import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://maplestory.nexon.com/Promotion/Event/2020/20200917/ElinelFullMoon">
        TripStory
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function SignUp(props) {

  const classes = useStyles();
  // props , state -> 이 안에서는 state 를 변화시켜서 이 안의 데이터를 변화시킬 수 있음
  // 입력한 이메일과 비밀번호를 서버에 넘길 수 있도록 state 에서 받고 있음
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Name, setName] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const onconfirmPasswordHandler = (event) => {
    setconfirmPassword(event.currentTarget.value)
  }

  const hasError = passwordEntered =>
    Password.length < 8 ? true : false;

  const hasNotSameError = passwordEntered =>
    Password != confirmPassword ? true : false;
  const onSubmitHandler = (event) => {
    event.preventDefault(); // 아무 동작 안하고 버튼만 눌러도 리프레쉬 되는 것을 막는다

    if (Password !== confirmPassword) {
      return alert('Repeat password correctly.')
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
    }

    // 완료가 잘 되었을 경우 이동
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {/* // 회원가입 형식 : 아이디 비번 이름 이메일 */}
        <form className={classes.form} noValidate>
          <Grid container spacing={3} m={6}>
            {/* id */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="id"
                label="ID"
                name="id"
                autoComplete="id"
              />
            </Grid>

            {/* f password */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"

                required
                fullWidth
                value={Password}
                onChange={onPasswordHandler}
                name="password"
                error={hasError('password')} // 해당 텍스트필드에 error 핸들러 추가
                label="Password(More than 8 charactors)"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            {/* confirm password */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={confirmPassword}
                onChange={onconfirmPasswordHandler}
                name="confirmPassword"
                error={hasNotSameError('confirmPassword')} // 해당 텍스트필드에 error 핸들러 추가
                helperText={
                  hasNotSameError('confirmPassword') ? "Pleas repeat password correctly." : null
                } // 에러일 경우에만 안내 문구 표시
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
              />
            </Grid>
            {/* name */}
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="Name"
                variant="outlined"
                value={Name}
                onChange={onNameHandler}
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
              />
            </Grid>
            {/* email */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={Email}
                onChange={onEmailHandler}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="마케팅 정보를 명목으로해서... 제 개인정보를 가져가 주세요."
              />
            </Grid>
          </Grid>
          <Button
             type="submit"
             fullWidth
             variant="contained"
             onSubmit={onSubmitHandler}
             color="primary"
             className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
export default SignUp;