;(this['webpackJsonpshopping-frontend'] =
  this['webpackJsonpshopping-frontend'] || []).push([
  [0],
  {
    106: function (e, t, c) {},
    107: function (e, t, c) {},
    108: function (e, t, c) {},
    109: function (e, t, c) {},
    110: function (e, t, c) {},
    112: function (e, t, c) {},
    114: function (e, t, c) {
      'use strict'
      c.r(t)
      var a = c(0),
        r = c.n(a),
        s = c(27),
        n = c.n(s),
        i = (c(76), c(77), c(78), c(7)),
        l = c.n(i),
        d = c(9),
        o = c(10),
        j = c(8),
        u = c.n(j),
        p = c(1),
        h = Object(a.createContext)()
      function b(e) {
        var t = Object(a.useState)(''),
          c = Object(o.a)(t, 2),
          r = c[0],
          s = c[1],
          n = Object(a.useState)(''),
          i = Object(o.a)(n, 2),
          j = i[0],
          b = i[1],
          m = Object(a.useState)(void 0),
          x = Object(o.a)(m, 2),
          O = x[0],
          f = x[1]
        function v() {
          return N.apply(this, arguments)
        }
        function N() {
          return (N = Object(d.a)(
            l.a.mark(function e() {
              var t
              return l.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          u.a.get(
                            'http://flybuyapi.aritrarivu.co.in/users/loggedIn'
                          )
                        )
                      case 3:
                        ;(t = e.sent),
                          f(t.data.loggedIn),
                          s(t.data.user),
                          b(t.data.userRole),
                          (e.next = 12)
                        break
                      case 9:
                        ;(e.prev = 9), (e.t0 = e.catch(0)), f(!1)
                      case 12:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [[0, 9]]
              )
            })
          )).apply(this, arguments)
        }
        return (
          Object(a.useEffect)(function () {
            v()
          }, []),
          Object(p.jsx)(h.Provider, {
            value: {
              loggedIn: O,
              getLoggedIn: v,
              loginUserID: r,
              setloginUserID: s,
              loginUserRole: j,
            },
            children: e.children,
          })
        )
      }
      var m = h,
        x = c(126),
        O = c(119),
        f = c(127),
        v = c(123),
        N = (c(99), c(11)),
        g = c(26),
        _ = c(21),
        y = c(17),
        w = c(128),
        C = c(124),
        I = c(68),
        D = c(65),
        L = c.n(D),
        P = function () {
          var e = Object(N.g)(),
            t = Object(a.useContext)(m).setloginUserID,
            c = Object(a.useState)({ email: '', password: '' }),
            r = Object(o.a)(c, 2),
            s = r[0],
            n = r[1],
            i = function (e) {
              var t = e.target.name,
                c = e.target.value
              n(Object(y.a)(Object(y.a)({}, s), {}, Object(_.a)({}, t, c)))
            },
            j = (function () {
              var c = Object(d.a)(
                l.a.mark(function c(a) {
                  return l.a.wrap(function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          a.preventDefault()
                          try {
                            u.a
                              .post(
                                'http://flybuyapi.aritrarivu.co.in/users/login',
                                s
                              )
                              .then(function (c, a) {
                                console.log('signed in'),
                                  t(c.data._id),
                                  e.push('/products')
                              })
                          } catch (r) {
                            console.log(r)
                          }
                        case 2:
                        case 'end':
                          return c.stop()
                      }
                  }, c)
                })
              )
              return function (e) {
                return c.apply(this, arguments)
              }
            })()
          return Object(p.jsxs)(O.a, {
            className: L.a.wrapper,
            children: [
              Object(p.jsx)('h1', {
                className: 'text-center mb-5',
                children: 'Welcome to FLY BUY',
              }),
              Object(p.jsx)(w.a, {
                className: 'mb-2',
                children: Object(p.jsx)(w.a.Body, {
                  children: Object(p.jsxs)(C.a, {
                    onSubmit: j,
                    children: [
                      Object(p.jsxs)(C.a.Group, {
                        className: 'mb-3',
                        controlId: 'formBasicEmail',
                        children: [
                          Object(p.jsx)(C.a.Label, {
                            className: 'fw-bold',
                            children: 'Email address',
                          }),
                          Object(p.jsx)(C.a.Control, {
                            type: 'email',
                            placeholder: 'Enter email',
                            name: 'email',
                            value: s.email,
                            onChange: i,
                          }),
                        ],
                      }),
                      Object(p.jsxs)(C.a.Group, {
                        className: 'mb-3',
                        controlId: 'formBasicPassword',
                        children: [
                          Object(p.jsx)(C.a.Label, {
                            className: 'fw-bold',
                            children: 'Password',
                          }),
                          Object(p.jsx)(C.a.Control, {
                            type: 'password',
                            placeholder: 'Enter password',
                            name: 'password',
                            value: s.password,
                            onChange: i,
                          }),
                        ],
                      }),
                      Object(p.jsx)(I.a, {
                        className: 'w-100 mb-2',
                        variant: 'primary',
                        type: 'submit',
                        children: 'Log In',
                      }),
                    ],
                  }),
                }),
              }),
              Object(p.jsx)('div', {
                className: 'text-center',
                children: Object(p.jsxs)('h5', {
                  children: [
                    "Don't have an account? ",
                    Object(p.jsx)('a', {
                      href: '/signup',
                      children: 'Sign up',
                    }),
                  ],
                }),
              }),
            ],
          })
        },
        k = c(69),
        S = c.n(k),
        G = function () {
          var e = Object(a.useState)({ userName: '', email: '', password: '' }),
            t = Object(o.a)(e, 2),
            c = t[0],
            r = t[1],
            s = function (e) {
              console.log(e)
              var t = e.target.name,
                a = e.target.value
              r(Object(y.a)(Object(y.a)({}, c), {}, Object(_.a)({}, t, a)))
            }
          return Object(p.jsxs)(O.a, {
            className: S.a.wrapper,
            children: [
              Object(p.jsx)('h2', {
                className: 'text-center mb-5',
                children: 'Create New Account',
              }),
              Object(p.jsx)(w.a, {
                className: 'mb-2',
                children: Object(p.jsx)(w.a.Body, {
                  children: Object(p.jsxs)(C.a, {
                    onSubmit: function (e) {
                      e.preventDefault(),
                        console.log(c),
                        u.a
                          .post('http://flybuyapi.aritrarivu.co.in/users', c)
                          .then(function (e) {
                            console.log(e)
                          })
                          .catch(function (e) {
                            console.log(e)
                          }),
                        r({ userName: '', email: '', password: '' }),
                        alert('New User accorunt created')
                    },
                    children: [
                      Object(p.jsxs)(C.a.Group, {
                        className: 'mb-3',
                        controlId: 'formBasicPassword',
                        children: [
                          Object(p.jsx)(C.a.Label, {
                            className: 'fw-bold',
                            children: 'User Name',
                          }),
                          Object(p.jsx)(C.a.Control, {
                            type: 'text',
                            placeholder: 'User Name',
                            onChange: s,
                            name: 'userName',
                            value: c.userName,
                          }),
                        ],
                      }),
                      Object(p.jsxs)(C.a.Group, {
                        className: 'mb-3',
                        controlId: 'formBasicEmail',
                        children: [
                          Object(p.jsx)(C.a.Label, {
                            className: 'fw-bold',
                            children: 'Email address',
                          }),
                          Object(p.jsx)(C.a.Control, {
                            type: 'email',
                            placeholder: 'Enter email',
                            onChange: s,
                            name: 'email',
                            value: c.email,
                          }),
                        ],
                      }),
                      Object(p.jsxs)(C.a.Group, {
                        className: 'mb-3',
                        controlId: 'formBasicPassword',
                        children: [
                          Object(p.jsx)(C.a.Label, {
                            className: 'fw-bold',
                            children: 'Password',
                          }),
                          Object(p.jsx)(C.a.Control, {
                            type: 'onChange={handleInput}',
                            placeholder: 'Enter password',
                            onChange: s,
                            name: 'password',
                            value: c.password,
                          }),
                        ],
                      }),
                      Object(p.jsx)(I.a, {
                        className: 'w-100',
                        variant: 'success',
                        type: 'submit',
                        children: 'Sign Up',
                      }),
                    ],
                  }),
                }),
              }),
              Object(p.jsx)('p', {
                className: 'text-center',
                children: Object(p.jsxs)('h5', {
                  children: [
                    'Already have an account? ',
                    Object(p.jsx)('a', { href: '/', children: 'Sign in' }),
                  ],
                }),
              }),
            ],
          })
        },
        U = (c(106), c(125)),
        A = c(120),
        E = function (e) {
          var t = e.product,
            c = e.addToCartHandler
          return Object(p.jsx)('div', {
            children: Object(p.jsxs)(w.a, {
              className: 'procuct_card',
              children: [
                Object(p.jsx)(U.a, {
                  fade: !0,
                  children: t.productImage.map(function (e, t) {
                    return Object(p.jsx)(
                      U.a.Item,
                      {
                        children: Object(p.jsx)(A.a, {
                          src: 'http://flybuyapi.aritrarivu.co.in/' + e,
                          rounded: !0,
                          className: 'cart_image',
                        }),
                      },
                      e.image
                    )
                  }),
                }),
                Object(p.jsxs)(w.a.Body, {
                  children: [
                    Object(p.jsx)(w.a.Title, {
                      className: 'procuct_title',
                      children: t.productName,
                    }),
                    Object(p.jsx)(w.a.Text, {
                      className: 'procuct_description',
                      children: t.productDescription,
                    }),
                    Object(p.jsxs)(w.a.Text, {
                      className: 'procuct_price',
                      children: [
                        Object(p.jsx)('b', { children: 'Price : ' }),
                        t.productPrice,
                        ' \xa0Rs.',
                      ],
                    }),
                    Object(p.jsxs)(w.a.Text, {
                      className: 'procuct_status',
                      children: [
                        Object(p.jsx)('b', { children: 'Status : ' }),
                        t.productStatus,
                      ],
                    }),
                    Object(p.jsx)(I.a, {
                      variant: 'dark',
                      onClick: c(t),
                      children: 'Add to Cart',
                    }),
                  ],
                }),
              ],
            }),
          })
        },
        R = c(121),
        B = c(122),
        M = c(67),
        T = function () {
          var e = Object(a.useContext)(m),
            t = e.loginUserID,
            c = e.getLoggedIn,
            r = Object(a.useState)([]),
            s = Object(o.a)(r, 2),
            n = s[0],
            i = s[1]
          Object(a.useEffect)(
            function () {
              j(), c()
            },
            [t]
          )
          var j = (function () {
              var e = Object(d.a)(
                l.a.mark(function e() {
                  return l.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              u.a
                                .get(
                                  'http://flybuyapi.aritrarivu.co.in/products'
                                )
                                .then(function (e, t) {
                                  i(e.data)
                                })
                            )
                          case 3:
                            e.next = 8
                            break
                          case 5:
                            ;(e.prev = 5),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0)
                          case 8:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 5]]
                  )
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            h = (function () {
              var e = Object(d.a)(
                l.a.mark(function e(t, c) {
                  return l.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              u.a
                                .post(
                                  'http://flybuyapi.aritrarivu.co.in/carts/submitNew',
                                  {
                                    loginUserID: c,
                                    productName: t.productName,
                                    productDescription: t.productDescription,
                                    productImage: t.productImage,
                                    productPrice: t.productPrice,
                                  }
                                )
                                .then(function (e, t) {
                                  alert('Product added to Cart successfully')
                                })
                            )
                          case 3:
                            e.next = 8
                            break
                          case 5:
                            ;(e.prev = 5),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0)
                          case 8:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 5]]
                  )
                })
              )
              return function (t, c) {
                return e.apply(this, arguments)
              }
            })(),
            b = function (e) {
              return function (c) {
                c.preventDefault(), h(e, t)
              }
            }
          return Object(p.jsx)('div', {
            className: 'm_20',
            children: Object(p.jsx)(R.a, {
              children: Object(p.jsx)(B.a, {
                xs: 1,
                md: 3,
                className: 'g-3',
                children: n.map(function (e, t) {
                  return Object(p.jsx)(
                    M.a,
                    {
                      children: Object(p.jsx)(E, {
                        product: e,
                        addToCartHandler: b,
                      }),
                    },
                    e.productName
                  )
                }),
              }),
            }),
          })
        },
        F =
          (c(107),
          function () {
            var e = Object(a.useContext)(m).loginUserID,
              t = Object(a.useState)({
                email: '',
                userName: '',
                phone: '',
                gender: '',
                addressLine: '',
                landMark: '',
                city: '',
                zip: '',
                state: '',
              }),
              c = Object(o.a)(t, 2),
              r = c[0],
              s = c[1]
            Object(a.useEffect)(
              function () {
                n()
              },
              [e]
            )
            var n = (function () {
                var t = Object(d.a)(
                  l.a.mark(function t() {
                    return l.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                u.a
                                  .get(
                                    'http://flybuyapi.aritrarivu.co.in/users/userDetails/'.concat(
                                      e
                                    )
                                  )
                                  .then(function (e, t) {
                                    s(e.data)
                                  })
                              )
                            case 3:
                              t.next = 8
                              break
                            case 5:
                              ;(t.prev = 5),
                                (t.t0 = t.catch(0)),
                                console.log(t.t0)
                            case 8:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      null,
                      [[0, 5]]
                    )
                  })
                )
                return function () {
                  return t.apply(this, arguments)
                }
              })(),
              i = (function () {
                var e = Object(d.a)(
                  l.a.mark(function e(t) {
                    var c, a
                    return l.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            ;(c = t.target.name),
                              (a = t.target.value),
                              s(
                                Object(y.a)(
                                  Object(y.a)({}, r),
                                  {},
                                  Object(_.a)({}, c, a)
                                )
                              )
                          case 3:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })(),
              j = (function () {
                var t = Object(d.a)(
                  l.a.mark(function t(c) {
                    return l.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              c.preventDefault(),
                              (t.next = 3),
                              u.a.patch(
                                'http://flybuyapi.aritrarivu.co.in/users/edit/'.concat(
                                  e
                                ),
                                r
                              )
                            )
                          case 3:
                            alert('Contact details Updated successfully')
                          case 4:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function (e) {
                  return t.apply(this, arguments)
                }
              })()
            return Object(p.jsxs)('div', {
              children: [
                Object(p.jsx)('div', {
                  className: 'm_20',
                  children: Object(p.jsxs)('h1', {
                    className:
                      'col-12 row align-items-center justify-content-center',
                    children: [r && r.userName, "'s Profile"],
                  }),
                }),
                Object(p.jsx)(O.a, {
                  children: Object(p.jsx)(w.a, {
                    className: 'profile_card',
                    children: Object(p.jsxs)(C.a, {
                      className: 'm_20',
                      onSubmit: j,
                      children: [
                        Object(p.jsxs)(B.a, {
                          children: [
                            Object(p.jsxs)(C.a.Group, {
                              as: M.a,
                              controlId: 'formGridEmail',
                              children: [
                                Object(p.jsx)(C.a.Label, {
                                  className: 'profile_field',
                                  children: 'Email',
                                }),
                                Object(p.jsx)(C.a.Control, {
                                  type: 'email',
                                  name: 'email',
                                  value: r && r.email,
                                  className: 'profile_input_field',
                                  onChange: i,
                                }),
                              ],
                            }),
                            Object(p.jsxs)(C.a.Group, {
                              as: M.a,
                              controlId: 'formGridPassword',
                              children: [
                                Object(p.jsx)(C.a.Label, {
                                  className: 'profile_field',
                                  children: 'Name',
                                }),
                                Object(p.jsx)(C.a.Control, {
                                  type: 'text',
                                  name: 'userName',
                                  value: r && r.userName,
                                  className: 'profile_input_field',
                                  onChange: i,
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(p.jsxs)(C.a.Group, {
                          controlId: 'formGridAddress1',
                          children: [
                            Object(p.jsx)(C.a.Label, {
                              className: 'profile_field',
                              children: 'Address ',
                            }),
                            Object(p.jsx)(C.a.Control, {
                              name: 'addressLine',
                              value: r && r.addressLine,
                              className: 'profile_input_field',
                              onChange: i,
                            }),
                          ],
                        }),
                        Object(p.jsxs)(B.a, {
                          children: [
                            Object(p.jsxs)(C.a.Group, {
                              as: M.a,
                              controlId: 'formGridAddress2',
                              children: [
                                Object(p.jsx)(C.a.Label, {
                                  className: 'profile_field',
                                  children: 'Land Mark',
                                }),
                                Object(p.jsx)(C.a.Control, {
                                  name: 'landMark',
                                  value: r && r.landMark,
                                  className: 'profile_input_field',
                                  onChange: i,
                                }),
                              ],
                            }),
                            Object(p.jsxs)(C.a.Group, {
                              as: M.a,
                              controlId: 'formGridAddress2',
                              children: [
                                Object(p.jsx)(C.a.Label, {
                                  className: 'profile_field',
                                  children: 'Phone No.',
                                }),
                                Object(p.jsx)(C.a.Control, {
                                  type: 'phone',
                                  name: 'phone',
                                  value: r && r.phone,
                                  className: 'profile_input_field',
                                  onChange: i,
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(p.jsxs)(B.a, {
                          children: [
                            Object(p.jsxs)(C.a.Group, {
                              as: M.a,
                              controlId: 'formGridCity',
                              children: [
                                Object(p.jsx)(C.a.Label, {
                                  className: 'profile_field',
                                  children: 'City',
                                }),
                                Object(p.jsx)(C.a.Control, {
                                  className: 'profile_input_field',
                                  name: 'city',
                                  value: r && r.city,
                                  onChange: i,
                                }),
                              ],
                            }),
                            Object(p.jsxs)(C.a.Group, {
                              as: M.a,
                              controlId: 'formGridCity',
                              children: [
                                Object(p.jsx)(C.a.Label, {
                                  className: 'profile_field',
                                  children: 'State',
                                }),
                                Object(p.jsx)(C.a.Control, {
                                  name: 'state',
                                  value: r && r.state,
                                  className: 'profile_input_field',
                                  onChange: i,
                                }),
                              ],
                            }),
                            Object(p.jsxs)(C.a.Group, {
                              as: M.a,
                              controlId: 'formGridZip',
                              children: [
                                Object(p.jsx)(C.a.Label, {
                                  className: 'profile_field',
                                  children: 'Zip',
                                }),
                                Object(p.jsx)(C.a.Control, {
                                  name: 'zip',
                                  value: r && r.zip,
                                  className: 'profile_input_field',
                                  onChange: i,
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(p.jsxs)(C.a.Group, {
                          controlId: 'formGridAddress2',
                          children: [
                            Object(p.jsx)(C.a.Label, {
                              className: 'profile_field',
                              children: 'Gender ',
                            }),
                            Object(p.jsx)(C.a.Control, {
                              type: 'text',
                              name: 'gender',
                              value: r && r.gender,
                              className: 'profile_input_field',
                              onChange: i,
                            }),
                          ],
                        }),
                        Object(p.jsx)(I.a, {
                          variant: 'info',
                          type: 'submit',
                          size: 'lg',
                          children: 'Edit Profile',
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          }),
        Y =
          (c(63),
          function (e) {
            var t = e.cart,
              c = e.deleteHandler
            return Object(p.jsx)('div', {
              children: Object(p.jsx)(w.a, {
                className: 'cart_card m_30',
                children: Object(p.jsx)('div', {
                  children: Object(p.jsxs)(B.a, {
                    children: [
                      Object(p.jsx)(M.a, {
                        md: 4,
                        children: Object(p.jsx)(U.a, {
                          fade: !0,
                          children: t.productImage.map(function (e, t) {
                            return Object(p.jsx)(
                              U.a.Item,
                              {
                                children: Object(p.jsx)(A.a, {
                                  src: 'http://flybuyapi.aritrarivu.co.in/' + e,
                                  rounded: !0,
                                  className: 'cart_image',
                                }),
                              },
                              e.image
                            )
                          }),
                        }),
                      }),
                      Object(p.jsxs)(M.a, {
                        children: [
                          Object(p.jsx)(B.a, {
                            className: 'row align-items-center m_20 cart_title',
                            children: t.productName,
                          }),
                          Object(p.jsx)(B.a, {
                            className:
                              'row align-items-center m_20 cart_description',
                            children: t.productDescription,
                          }),
                          Object(p.jsxs)(B.a, {
                            className: 'row align-items-center m_20 cart_price',
                            children: ['Price : ', t.productPrice, ' Rs'],
                          }),
                          Object(p.jsx)(B.a, {
                            className: 'row align-items-center  m_20',
                            children: Object(p.jsx)(M.a, {
                              children: Object(p.jsx)(I.a, {
                                variant: 'danger',
                                onClick: c(t),
                                children: 'Remove Item',
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          }),
        H = function () {
          var e = Object(a.useContext)(m).loginUserID,
            t = Object(a.useState)([]),
            c = Object(o.a)(t, 2),
            r = c[0],
            s = c[1],
            n = Object(a.useState)({}),
            i = Object(o.a)(n, 2),
            j = i[0],
            h = i[1]
          Object(a.useEffect)(
            function () {
              x(), b()
            },
            [e]
          )
          var b = (function () {
              var t = Object(d.a)(
                l.a.mark(function t() {
                  return l.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              u.a
                                .get(
                                  'http://flybuyapi.aritrarivu.co.in/users/userDetails/'.concat(
                                    e
                                  )
                                )
                                .then(function (e, t) {
                                  h(e.data)
                                })
                            )
                          case 3:
                            t.next = 8
                            break
                          case 5:
                            ;(t.prev = 5),
                              (t.t0 = t.catch(0)),
                              console.log(t.t0)
                          case 8:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    null,
                    [[0, 5]]
                  )
                })
              )
              return function () {
                return t.apply(this, arguments)
              }
            })(),
            x = (function () {
              var t = Object(d.a)(
                l.a.mark(function t() {
                  return l.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              u.a
                                .get(
                                  'http://flybuyapi.aritrarivu.co.in/carts/'.concat(
                                    e
                                  )
                                )
                                .then(function (e, t) {
                                  s(e.data)
                                })
                            )
                          case 3:
                            t.next = 8
                            break
                          case 5:
                            ;(t.prev = 5),
                              (t.t0 = t.catch(0)),
                              console.log(t.t0)
                          case 8:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    null,
                    [[0, 5]]
                  )
                })
              )
              return function () {
                return t.apply(this, arguments)
              }
            })(),
            O = (function () {
              var e = Object(d.a)(
                l.a.mark(function e(t) {
                  return l.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              console.log(t),
                              (e.next = 4),
                              u.a
                                .delete(
                                  'http://flybuyapi.aritrarivu.co.in/carts/'.concat(
                                    t
                                  )
                                )
                                .then(function (e, c) {
                                  s(function (e) {
                                    var c = e.findIndex(function (e) {
                                      return e._id === t
                                    })
                                    return e.filter(function (e, t) {
                                      return t !== c
                                    })
                                  }),
                                    alert(
                                      'Product Deleted from Cart successfully'
                                    )
                                })
                            )
                          case 4:
                            e.next = 9
                            break
                          case 6:
                            ;(e.prev = 6),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0)
                          case 9:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 6]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })(),
            f = function (e) {
              return function (t) {
                t.preventDefault(), O(e._id)
              }
            },
            v = (function () {
              var e = Object(d.a)(
                l.a.mark(function e(t, c) {
                  return l.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              console.log(t),
                              console.log(c),
                              (e.next = 5),
                              u.a
                                .post(
                                  'http://flybuyapi.aritrarivu.co.in/orders/submitNew',
                                  { user: t, carts: c }
                                )
                                .then(function (e, t) {
                                  alert('Order Placed successfully')
                                })
                            )
                          case 5:
                            e.next = 10
                            break
                          case 7:
                            ;(e.prev = 7),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0)
                          case 10:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 7]]
                  )
                })
              )
              return function (t, c) {
                return e.apply(this, arguments)
              }
            })()
          return 0 === r.length
            ? Object(p.jsx)('div', {
                className: 'm_20',
                children: Object(p.jsx)('h1', {
                  className:
                    'col-12 row align-items-center justify-content-center',
                  children: 'No Items in Your Cart',
                }),
              })
            : Object(p.jsxs)('div', {
                children: [
                  Object(p.jsx)('div', {
                    className: 'm_20',
                    children: Object(p.jsx)('h1', {
                      className:
                        'col-12 row align-items-center justify-content-center',
                      children: 'YOUR CART',
                    }),
                  }),
                  r.map(function (e, t) {
                    return Object(p.jsx)(
                      M.a,
                      {
                        children: Object(p.jsx)(Y, {
                          cart: e,
                          deleteHandler: f,
                        }),
                      },
                      e.productName
                    )
                  }),
                  Object(p.jsx)('div', {
                    className:
                      'm_30 row align-items-center justify-content-center ',
                    size: 'lg',
                    children: Object(p.jsx)(I.a, {
                      variant: 'success',
                      size: 'lg',
                      onClick: function (e) {
                        e.preventDefault(), v(j, r)
                      },
                      children: Object(p.jsx)('b', { children: 'PLACE ORDER' }),
                    }),
                  }),
                ],
              })
        },
        z =
          (c(64),
          function (e) {
            var t = e.dashBoardProduct,
              c = e.deleteHandler
            return Object(p.jsx)('div', {
              className: '',
              children: Object(p.jsx)(w.a, {
                className: 'dashBoard_card m_30',
                children: Object(p.jsx)('div', {
                  children: Object(p.jsxs)(B.a, {
                    children: [
                      Object(p.jsx)(M.a, {
                        md: 4,
                        children: Object(p.jsx)(U.a, {
                          fade: !0,
                          children: t.productImage.map(function (e, t) {
                            return Object(p.jsx)(U.a.Item, {
                              children: Object(p.jsx)(A.a, {
                                src: 'http://flybuyapi.aritrarivu.co.in/' + e,
                                rounded: !0,
                                className: 'cart_image',
                              }),
                            })
                          }),
                        }),
                      }),
                      Object(p.jsxs)(M.a, {
                        children: [
                          Object(p.jsx)(B.a, {
                            className:
                              'row align-items-center m_20 dashBoard_title',
                            children: t.productName,
                          }),
                          Object(p.jsx)(B.a, {
                            className:
                              'row align-items-center m_20 cart_description',
                            children: t.productDescription,
                          }),
                          Object(p.jsxs)(B.a, {
                            className:
                              'row align-items-center m_20 dashBoard_price',
                            children: ['Price : ', t.productPrice, ' Rs'],
                          }),
                          Object(p.jsxs)(B.a, {
                            className:
                              'row align-items-center m_20 dashBoard_status',
                            children: ['Status : ', t.productStatus],
                          }),
                          Object(p.jsxs)(B.a, {
                            className: 'row align-items-center  m_20',
                            children: [
                              Object(p.jsxs)(M.a, {
                                children: [
                                  'Available Quantity : ',
                                  t.productMaxQuantiy,
                                ],
                              }),
                              Object(p.jsx)(M.a, {
                                children: Object(p.jsx)(I.a, {
                                  variant: 'danger',
                                  onClick: c(t),
                                  size: 'lg',
                                  children: 'Remove',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          }),
        Q = function () {
          var e = Object(a.useContext)(m),
            t = e.getLoggedIn,
            c = e.loginUserRole,
            r = Object(a.useState)([]),
            s = Object(o.a)(r, 2),
            n = s[0],
            i = s[1]
          Object(a.useEffect)(function () {
            j(), t()
          }, [])
          var j = (function () {
              var e = Object(d.a)(
                l.a.mark(function e() {
                  return l.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              u.a
                                .get(
                                  'http://flybuyapi.aritrarivu.co.in/products'
                                )
                                .then(function (e, t) {
                                  i(e.data)
                                })
                            )
                          case 3:
                            e.next = 8
                            break
                          case 5:
                            ;(e.prev = 5),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0)
                          case 8:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 5]]
                  )
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            h = (function () {
              var e = Object(d.a)(
                l.a.mark(function e(t) {
                  return l.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              console.log(t),
                              (e.next = 4),
                              u.a
                                .delete(
                                  'http://flybuyapi.aritrarivu.co.in/products/'.concat(
                                    t
                                  )
                                )
                                .then(function (e, c) {
                                  i(function (e) {
                                    var c = e.findIndex(function (e) {
                                      return e._id === t
                                    })
                                    return e.filter(function (e, t) {
                                      return t !== c
                                    })
                                  }),
                                    alert('Product  Deleted successfully')
                                })
                            )
                          case 4:
                            e.next = 9
                            break
                          case 6:
                            ;(e.prev = 6),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0)
                          case 9:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 6]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })(),
            b = function (e) {
              return function (t) {
                t.preventDefault(), h(e._id)
              }
            }
          return 'User' === c
            ? Object(p.jsx)(N.a, { to: '/products' })
            : Object(p.jsxs)('div', {
                className: '',
                children: [
                  Object(p.jsxs)(B.a, {
                    className: 'm_20',
                    children: [
                      Object(p.jsx)(M.a, {
                        children: Object(p.jsx)('h1', {
                          className:
                            'col-12 row align-items-center justify-content-center',
                          children: 'Admin DashBoard',
                        }),
                      }),
                      Object(p.jsx)(M.a, {
                        children: Object(p.jsx)(g.b, {
                          to: '/addProduct',
                          children: Object(p.jsx)(I.a, {
                            variant: 'success',
                            size: 'lg',
                            children: 'Add Product',
                          }),
                        }),
                      }),
                    ],
                  }),
                  n.map(function (e, t) {
                    return Object(p.jsx)(
                      M.a,
                      {
                        children: Object(p.jsx)(z, {
                          dashBoardProduct: e,
                          deleteHandler: b,
                        }),
                      },
                      e.productName
                    )
                  }),
                ],
              })
        },
        Z = c(71),
        J =
          (c(108),
          function () {
            var e = Object(a.useContext)(m).loginUserRole,
              t = Object(a.useState)({
                productName: '',
                productCategory: '',
                productDescription: '',
                productPrice: '',
                productMaxQuantiy: '',
                productStatus: '',
                productImage: '',
              }),
              c = Object(o.a)(t, 2),
              r = c[0],
              s = c[1],
              n = function (e) {
                var t = e.target.name,
                  c = e.target.value
                s(Object(y.a)(Object(y.a)({}, r), {}, Object(_.a)({}, t, c)))
              },
              i = (function () {
                var e = Object(d.a)(
                  l.a.mark(function e(t) {
                    var c
                    return l.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            t.preventDefault(),
                              (c = new FormData()),
                              r.productImage.forEach(function (e) {
                                c.append('productImage', e)
                              }),
                              c.append('productName', r.productName),
                              c.append(
                                'productDescription',
                                r.productDescription
                              ),
                              c.append('productPrice', r.productPrice),
                              c.append('productCategory', r.productCategory),
                              c.append('productStatus', r.productStatus),
                              c.append(
                                'productMaxQuantiy',
                                r.productMaxQuantiy
                              ),
                              u.a
                                .post(
                                  'http://flybuyapi.aritrarivu.co.in/products/submitNew',
                                  c,
                                  { 'Content-Type': 'multipart/form-data' }
                                )
                                .catch(function (e) {
                                  console.log(e)
                                }),
                              s({
                                productName: '',
                                productCategory: '',
                                productDescription: '',
                                productPrice: '',
                                productMaxQuantiy: '',
                                productStatus: '',
                                productImage: '',
                              }),
                              alert('Product Added successfully')
                          case 12:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })()
            return 'User' === e
              ? Object(p.jsx)(N.a, { to: '/products' })
              : Object(p.jsxs)('div', {
                  children: [
                    Object(p.jsx)('div', {
                      className: 'm_20',
                      children: Object(p.jsx)('h1', {
                        className:
                          'col-12 row align-items-center justify-content-center',
                        children: 'ADD A NEW PRODUCT',
                      }),
                    }),
                    Object(p.jsx)(O.a, {
                      children: Object(p.jsx)(w.a, {
                        className: 'add_product_card',
                        children: Object(p.jsxs)(C.a, {
                          className: 'm_20',
                          onSubmit: i,
                          children: [
                            Object(p.jsxs)(C.a.Group, {
                              as: M.a,
                              controlId: 'formGridEmail',
                              children: [
                                Object(p.jsx)(C.a.Label, {
                                  className: 'add_product_field',
                                  children: 'Product Name',
                                }),
                                Object(p.jsx)(C.a.Control, {
                                  type: 'text',
                                  name: 'productName',
                                  value: r.productName,
                                  className: 'add_product_input_field',
                                  onChange: n,
                                }),
                              ],
                            }),
                            Object(p.jsxs)(C.a.Group, {
                              as: M.a,
                              controlId: 'formGridPassword',
                              children: [
                                Object(p.jsx)(C.a.Label, {
                                  className: 'add_product_field',
                                  children: 'Product Category',
                                }),
                                Object(p.jsx)(C.a.Control, {
                                  type: 'text',
                                  name: 'productCategory',
                                  value: r.productCategory,
                                  onChange: n,
                                  className: 'add_product_input_field',
                                }),
                              ],
                            }),
                            Object(p.jsxs)(C.a.Group, {
                              as: M.a,
                              controlId: 'formGridPassword',
                              children: [
                                Object(p.jsx)(C.a.Label, {
                                  className: 'add_product_field',
                                  children: 'Product Description',
                                }),
                                Object(p.jsx)(C.a.Control, {
                                  type: 'text',
                                  name: 'productDescription',
                                  value: r.productDescription,
                                  onChange: n,
                                  className: 'add_product_input_field',
                                }),
                              ],
                            }),
                            Object(p.jsxs)(B.a, {
                              children: [
                                Object(p.jsxs)(C.a.Group, {
                                  as: M.a,
                                  controlId: 'formGridCity',
                                  children: [
                                    Object(p.jsx)(C.a.Label, {
                                      className: 'add_product_field',
                                      children: 'Price',
                                    }),
                                    Object(p.jsx)(C.a.Control, {
                                      className: 'add_product_input_field',
                                      type: 'text',
                                      name: 'productPrice',
                                      value: r.productPrice,
                                      onChange: n,
                                    }),
                                  ],
                                }),
                                Object(p.jsxs)(C.a.Group, {
                                  as: M.a,
                                  controlId: 'formGridCity',
                                  children: [
                                    Object(p.jsx)(C.a.Label, {
                                      className: 'add_product_field',
                                      children: 'Quantity',
                                    }),
                                    Object(p.jsx)(C.a.Control, {
                                      type: 'number',
                                      name: 'productMaxQuantiy',
                                      className: 'add_product_input_field',
                                      value: r.productMaxQuantiy,
                                      onChange: n,
                                    }),
                                  ],
                                }),
                                Object(p.jsxs)(C.a.Group, {
                                  as: M.a,
                                  controlId: 'formGridZip',
                                  children: [
                                    Object(p.jsx)(C.a.Label, {
                                      className: 'add_product_field',
                                      children: 'Availability',
                                    }),
                                    Object(p.jsx)(C.a.Control, {
                                      type: 'text',
                                      name: 'productStatus',
                                      className: 'add_product_input_field',
                                      value: r.productStatus,
                                      onChange: n,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(p.jsxs)(C.a.Group, {
                              as: M.a,
                              controlId: 'formGridEmail',
                              children: [
                                Object(p.jsx)(C.a.Label, {
                                  className: 'add_product_field',
                                  children: 'Upload Images : \u2003',
                                }),
                                Object(p.jsx)('input', {
                                  type: 'file',
                                  name: 'productImage',
                                  className:
                                    'add_product_input_field image_uploader',
                                  onChange: function (e) {
                                    var t = e.target.files
                                    s(
                                      Object(y.a)(
                                        Object(y.a)({}, r),
                                        {},
                                        { productImage: Object(Z.a)(t) }
                                      )
                                    )
                                  },
                                  multiple: !0,
                                }),
                              ],
                            }),
                            Object(p.jsx)(I.a, {
                              variant: 'warning',
                              size: 'lg',
                              type: 'submit',
                              children: 'Add Product',
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                })
          }),
        W =
          (c(109),
          function () {
            return Object(p.jsx)('div', {
              children: Object(p.jsx)(O.a, {
                children: Object(p.jsx)(w.a, {
                  className: 'aboout_card',
                  children: Object(p.jsxs)('div', {
                    className: 'aboout_card_body',
                    children: [
                      Object(p.jsx)('h1', { children: ' About Us' }),
                      Object(p.jsx)('p', {
                        children:
                          'Welcome to this prototype Shopping App FLY BUY. In this application you can add a product in your cart and place the order. You can update your personal details and see your order history also. Admin can only show the orders placed by all users. Admin can also add or remove product from the App. This Application is created with MERN stack technology.',
                      }),
                    ],
                  }),
                }),
              }),
            })
          }),
        q = (c(110), c(45)),
        K = c.n(q),
        V = function (e) {
          var t = e.productDetail,
            c = e.order
          return Object(p.jsx)('div', {
            children: Object(p.jsx)(w.a, {
              className: 'cart_card m_30',
              children: Object(p.jsx)('div', {
                children: Object(p.jsxs)(B.a, {
                  children: [
                    Object(p.jsx)(M.a, {
                      md: 4,
                      children: Object(p.jsx)(U.a, {
                        fade: !0,
                        children: t.productImage.map(function (e, t) {
                          return Object(p.jsx)(
                            U.a.Item,
                            {
                              children: Object(p.jsx)(A.a, {
                                src: 'http://flybuyapi.aritrarivu.co.in/' + e,
                                rounded: !0,
                                className: 'order_image',
                              }),
                            },
                            e.image
                          )
                        }),
                      }),
                    }),
                    Object(p.jsxs)(M.a, {
                      children: [
                        Object(p.jsx)(B.a, {
                          className:
                            'row align-items-center m_20 order_name_title',
                          children: Object(p.jsx)(M.a, {
                            children: Object(p.jsxs)('div', {
                              className: 'd-flex',
                              children: [
                                Object(p.jsx)('div', {
                                  className: '',
                                  children: ' Poduct Name : ',
                                }),
                                '\xa0',
                                Object(p.jsx)('div', {
                                  className: '',
                                  children: t.productName,
                                }),
                              ],
                            }),
                          }),
                        }),
                        Object(p.jsxs)(B.a, {
                          className: 'row align-items-center m_20 ',
                          children: [
                            Object(p.jsx)(M.a, {
                              children: Object(p.jsxs)('div', {
                                className: 'd-flex',
                                children: [
                                  Object(p.jsx)('div', {
                                    className: 'order_title',
                                    children: ' Price : ',
                                  }),
                                  '\xa0',
                                  Object(p.jsxs)('div', {
                                    className: 'order_description',
                                    children: [t.productPrice, ' Rs'],
                                  }),
                                ],
                              }),
                            }),
                            Object(p.jsx)(M.a, {
                              children: Object(p.jsxs)('div', {
                                className: 'd-flex',
                                children: [
                                  Object(p.jsx)('div', {
                                    className: 'order_title',
                                    children: ' Order Date : ',
                                  }),
                                  '\xa0',
                                  Object(p.jsx)('div', {
                                    className: 'order_description',
                                    children: K()(c.Orderdate).format('LLL'),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        Object(p.jsxs)(B.a, {
                          className: 'row align-items-center m_20 ',
                          children: [
                            Object(p.jsx)(M.a, {
                              children: Object(p.jsxs)('div', {
                                className: 'd-flex',
                                children: [
                                  Object(p.jsx)('div', {
                                    className: 'order_title',
                                    children: ' Name : ',
                                  }),
                                  '\xa0',
                                  Object(p.jsxs)('div', {
                                    className: 'order_description',
                                    children: [' ', c.userName],
                                  }),
                                ],
                              }),
                            }),
                            Object(p.jsx)(M.a, {
                              children: Object(p.jsxs)('div', {
                                className: 'd-flex',
                                children: [
                                  Object(p.jsx)('div', {
                                    className: 'order_title',
                                    children: ' Phone : ',
                                  }),
                                  '\xa0',
                                  Object(p.jsxs)('div', {
                                    className: 'order_description',
                                    children: [' ', c.phone],
                                  }),
                                ],
                              }),
                            }),
                            Object(p.jsx)(M.a, {
                              children: Object(p.jsxs)('div', {
                                className: 'd-flex',
                                children: [
                                  Object(p.jsx)('div', {
                                    className: 'order_title',
                                    children: ' Email Id : ',
                                  }),
                                  '\xa0',
                                  Object(p.jsxs)('div', {
                                    className: 'order_description',
                                    children: [' ', c.email],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        Object(p.jsxs)(B.a, {
                          className: 'row align-items-center m_20 ',
                          children: [
                            Object(p.jsx)(M.a, {
                              children: Object(p.jsxs)('div', {
                                className: 'd-flex',
                                children: [
                                  Object(p.jsx)('div', {
                                    className: 'order_title',
                                    children: 'Address : ',
                                  }),
                                  '\xa0',
                                  Object(p.jsx)('div', {
                                    className: 'order_description',
                                    children: c.addressLine,
                                  }),
                                ],
                              }),
                            }),
                            Object(p.jsx)(M.a, {
                              children: Object(p.jsxs)('div', {
                                className: 'd-flex',
                                children: [
                                  Object(p.jsx)('div', {
                                    className: 'order_title',
                                    children: ' Land Mark : ',
                                  }),
                                  '\xa0',
                                  Object(p.jsxs)('div', {
                                    className: 'order_description',
                                    children: [' ', c.landMark],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        Object(p.jsxs)(B.a, {
                          className: 'row align-items-center m_20 ',
                          children: [
                            Object(p.jsx)(M.a, {
                              children: Object(p.jsxs)('div', {
                                className: 'd-flex',
                                children: [
                                  Object(p.jsx)('div', {
                                    className: 'order_title',
                                    children: ' City: ',
                                  }),
                                  '\xa0',
                                  Object(p.jsxs)('div', {
                                    className: 'order_description',
                                    children: [' ', c.city],
                                  }),
                                ],
                              }),
                            }),
                            Object(p.jsx)(M.a, {
                              children: Object(p.jsxs)('div', {
                                className: 'd-flex',
                                children: [
                                  Object(p.jsx)('div', {
                                    className: 'order_title',
                                    children: ' Zip: ',
                                  }),
                                  '\xa0',
                                  Object(p.jsxs)('div', {
                                    className: 'order_description',
                                    children: [' ', c.zip],
                                  }),
                                ],
                              }),
                            }),
                            Object(p.jsx)(M.a, {
                              children: Object(p.jsxs)('div', {
                                className: 'd-flex',
                                children: [
                                  Object(p.jsx)('div', {
                                    className: 'order_title',
                                    children: ' State: ',
                                  }),
                                  '\xa0',
                                  Object(p.jsxs)('div', {
                                    className: 'order_description',
                                    children: [' ', c.state],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          })
        },
        X = function (e) {
          var t = e.order
          return Object(p.jsx)('div', {
            children: t.productDetails.map(function (e, c) {
              return Object(p.jsx)(
                M.a,
                { children: Object(p.jsx)(V, { order: t, productDetail: e }) },
                e.productName
              )
            }),
          })
        },
        $ = function () {
          var e = Object(a.useContext)(m),
            t = e.getLoggedIn,
            c = e.loginUserRole,
            r = Object(a.useState)([]),
            s = Object(o.a)(r, 2),
            n = s[0],
            i = s[1]
          Object(a.useEffect)(function () {
            j(), t()
          }, [])
          var j = (function () {
            var e = Object(d.a)(
              l.a.mark(function e() {
                return l.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            u.a
                              .get('http://flybuyapi.aritrarivu.co.in/orders')
                              .then(function (e, t) {
                                i(e.data)
                              })
                          )
                        case 3:
                          e.next = 8
                          break
                        case 5:
                          ;(e.prev = 5), (e.t0 = e.catch(0)), console.log(e.t0)
                        case 8:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[0, 5]]
                )
              })
            )
            return function () {
              return e.apply(this, arguments)
            }
          })()
          return 'User' === c
            ? Object(p.jsx)(N.a, { to: '/products' })
            : Object(p.jsxs)('div', {
                children: [
                  Object(p.jsx)('div', {
                    className: 'm_20',
                    children: Object(p.jsx)('h1', {
                      className:
                        'col-12 row align-items-center justify-content-center',
                      children: 'ORDER REQUEST FROM USERS',
                    }),
                  }),
                  n.map(function (e, t) {
                    return Object(p.jsx)(
                      M.a,
                      { children: Object(p.jsx)(X, { order: e }) },
                      e.userName
                    )
                  }),
                ],
              })
        },
        ee =
          (c(112),
          function (e) {
            var t = e.order,
              c = e.productDetail
            return Object(p.jsx)('div', {
              children: Object(p.jsx)(w.a, {
                className: 'cart_card m_30',
                children: Object(p.jsx)('div', {
                  children: Object(p.jsxs)(B.a, {
                    children: [
                      Object(p.jsx)(M.a, {
                        md: 4,
                        children: Object(p.jsx)(U.a, {
                          fade: !0,
                          children: c.productImage.map(function (e, t) {
                            return Object(p.jsx)(
                              U.a.Item,
                              {
                                children: Object(p.jsx)(A.a, {
                                  src: 'http://flybuyapi.aritrarivu.co.in/' + e,
                                  rounded: !0,
                                  className: 'order_image',
                                }),
                              },
                              e.image
                            )
                          }),
                        }),
                      }),
                      Object(p.jsxs)(M.a, {
                        children: [
                          Object(p.jsx)(B.a, {
                            className:
                              'row align-items-center m_20 order_name_title',
                            children: Object(p.jsx)(M.a, {
                              children: Object(p.jsxs)('div', {
                                className: 'd-flex',
                                children: [
                                  Object(p.jsx)('div', {
                                    className: '',
                                    children: ' Poduct Name : ',
                                  }),
                                  '\xa0',
                                  Object(p.jsx)('div', {
                                    className: '',
                                    children: c.productName,
                                  }),
                                ],
                              }),
                            }),
                          }),
                          Object(p.jsxs)(B.a, {
                            className: 'row align-items-center m_20 ',
                            children: [
                              Object(p.jsx)(M.a, {
                                children: Object(p.jsxs)('div', {
                                  className: 'd-flex',
                                  children: [
                                    Object(p.jsx)('div', {
                                      className: 'order_title',
                                      children: ' Price : ',
                                    }),
                                    '\xa0',
                                    Object(p.jsxs)('div', {
                                      className: 'order_description',
                                      children: [c.productPrice, '\xa0Rs'],
                                    }),
                                  ],
                                }),
                              }),
                              Object(p.jsx)(M.a, {
                                children: Object(p.jsxs)('div', {
                                  className: 'd-flex',
                                  children: [
                                    Object(p.jsx)('div', {
                                      className: 'order_title',
                                      children: ' Order Date : ',
                                    }),
                                    '\xa0',
                                    Object(p.jsx)('div', {
                                      className: 'order_description',
                                      children: K()(t.Orderdate).format('LLL'),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          Object(p.jsxs)(B.a, {
                            className: 'row align-items-center m_20 ',
                            children: [
                              Object(p.jsx)(M.a, {
                                children: Object(p.jsxs)('div', {
                                  className: 'd-flex',
                                  children: [
                                    Object(p.jsx)('div', {
                                      className: 'order_title',
                                      children: ' Name : ',
                                    }),
                                    '\xa0',
                                    Object(p.jsxs)('div', {
                                      className: 'order_description',
                                      children: [' ', t.userName],
                                    }),
                                  ],
                                }),
                              }),
                              Object(p.jsx)(M.a, {
                                children: Object(p.jsxs)('div', {
                                  className: 'd-flex',
                                  children: [
                                    Object(p.jsx)('div', {
                                      className: 'order_title',
                                      children: ' Phone : ',
                                    }),
                                    '\xa0',
                                    Object(p.jsxs)('div', {
                                      className: 'order_description',
                                      children: [' ', t.phone],
                                    }),
                                  ],
                                }),
                              }),
                              Object(p.jsx)(M.a, {
                                children: Object(p.jsxs)('div', {
                                  className: 'd-flex',
                                  children: [
                                    Object(p.jsx)('div', {
                                      className: 'order_title',
                                      children: ' Email Id : ',
                                    }),
                                    '\xa0',
                                    Object(p.jsxs)('div', {
                                      className: 'order_description',
                                      children: [' ', t.email],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          Object(p.jsxs)(B.a, {
                            className: 'row align-items-center m_20 ',
                            children: [
                              Object(p.jsx)(M.a, {
                                children: Object(p.jsxs)('div', {
                                  className: 'd-flex',
                                  children: [
                                    Object(p.jsx)('div', {
                                      className: 'order_title',
                                      children: 'Address : ',
                                    }),
                                    '\xa0',
                                    Object(p.jsx)('div', {
                                      className: 'order_description',
                                      children: t.addressLine,
                                    }),
                                  ],
                                }),
                              }),
                              Object(p.jsx)(M.a, {
                                children: Object(p.jsxs)('div', {
                                  className: 'd-flex',
                                  children: [
                                    Object(p.jsx)('div', {
                                      className: 'order_title',
                                      children: ' Land Mark : ',
                                    }),
                                    '\xa0',
                                    Object(p.jsxs)('div', {
                                      className: 'order_description',
                                      children: [' ', t.landMark],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          Object(p.jsxs)(B.a, {
                            className: 'row align-items-center m_20 ',
                            children: [
                              Object(p.jsx)(M.a, {
                                children: Object(p.jsxs)('div', {
                                  className: 'd-flex',
                                  children: [
                                    Object(p.jsx)('div', {
                                      className: 'order_title',
                                      children: ' City: ',
                                    }),
                                    '\xa0',
                                    Object(p.jsxs)('div', {
                                      className: 'order_description',
                                      children: [' ', t.city],
                                    }),
                                  ],
                                }),
                              }),
                              Object(p.jsx)(M.a, {
                                children: Object(p.jsxs)('div', {
                                  className: 'd-flex',
                                  children: [
                                    Object(p.jsx)('div', {
                                      className: 'order_title',
                                      children: ' Zip: ',
                                    }),
                                    '\xa0',
                                    Object(p.jsxs)('div', {
                                      className: 'order_description',
                                      children: [' ', t.zip],
                                    }),
                                  ],
                                }),
                              }),
                              Object(p.jsx)(M.a, {
                                children: Object(p.jsxs)('div', {
                                  className: 'd-flex',
                                  children: [
                                    Object(p.jsx)('div', {
                                      className: 'order_title',
                                      children: ' State: ',
                                    }),
                                    '\xa0',
                                    Object(p.jsxs)('div', {
                                      className: 'order_description',
                                      children: [' ', t.state],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          }),
        te = function (e) {
          var t = e.order
          return Object(p.jsx)('div', {
            children: t.productDetails.map(function (e, c) {
              return Object(p.jsx)(
                M.a,
                { children: Object(p.jsx)(ee, { order: t, productDetail: e }) },
                e.productName
              )
            }),
          })
        },
        ce = function () {
          var e = Object(a.useContext)(m),
            t = e.getLoggedIn,
            c = e.loginUserID,
            r = Object(a.useState)([]),
            s = Object(o.a)(r, 2),
            n = s[0],
            i = s[1]
          console.log(n),
            Object(a.useEffect)(
              function () {
                j(), t()
              },
              [c]
            )
          var j = (function () {
            var e = Object(d.a)(
              l.a.mark(function e() {
                return l.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            u.a
                              .get(
                                'http://flybuyapi.aritrarivu.co.in/orders/orderHistory/'.concat(
                                  c
                                )
                              )
                              .then(function (e, t) {
                                i(e.data), console.log(n)
                              })
                          )
                        case 3:
                          e.next = 8
                          break
                        case 5:
                          ;(e.prev = 5), (e.t0 = e.catch(0)), console.log(e.t0)
                        case 8:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[0, 5]]
                )
              })
            )
            return function () {
              return e.apply(this, arguments)
            }
          })()
          return 0 === n.length
            ? Object(p.jsx)('div', {
                className: 'm_20',
                children: Object(p.jsx)('h1', {
                  className:
                    'col-12 row align-items-center justify-content-center',
                  children: 'You Dont Have Any Order History',
                }),
              })
            : Object(p.jsxs)('div', {
                children: [
                  Object(p.jsx)('div', {
                    className: 'm_20',
                    children: Object(p.jsx)('h1', {
                      className:
                        'col-12 row align-items-center justify-content-center',
                      children: 'Order Request History',
                    }),
                  }),
                  n.map(function (e, t) {
                    return Object(p.jsx)(
                      M.a,
                      { children: Object(p.jsx)(te, { order: e }) },
                      e.userName
                    )
                  }),
                ],
              })
        },
        ae = function () {
          var e = Object(N.g)(),
            t = Object(a.useContext)(m),
            c = t.loginUserRole,
            r = t.loggedIn,
            s = t.getLoggedIn
          function n() {
            return (n = Object(d.a)(
              l.a.mark(function t() {
                return l.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            u.a.get(
                              'http://flybuyapi.aritrarivu.co.in/users/logout'
                            )
                          )
                        case 3:
                          return (t.next = 5), s()
                        case 5:
                          alert('You Have Successfully Logged Off'),
                            console.log('logged out'),
                            e.push('/'),
                            (t.next = 13)
                          break
                        case 10:
                          ;(t.prev = 10), (t.t0 = t.catch(0)), console.log(t.t0)
                        case 13:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 10]]
                )
              })
            )).apply(this, arguments)
          }
          return Object(p.jsx)('div', {
            className: 'header_bg',
            children: Object(p.jsxs)(g.a, {
              children: [
                Object(p.jsx)(x.a, {
                  collapseOnSelect: !0,
                  expand: 'lg',
                  bg: 'dark',
                  variant: 'dark',
                  sticky: 'top',
                  children: Object(p.jsxs)(O.a, {
                    className: 'header_text',
                    children: [
                      !0 === r &&
                        Object(p.jsx)(x.a.Brand, {
                          href: '/products',
                          className: 'header_app_name_text',
                          children: 'FLY BUY',
                        }),
                      !1 === r &&
                        Object(p.jsx)(x.a.Brand, {
                          className: 'header_app_name_text',
                          children: 'FLY BUY',
                        }),
                      !0 === r &&
                        Object(p.jsxs)(p.Fragment, {
                          children: [
                            Object(p.jsx)(x.a.Toggle, {
                              'aria-controls': 'responsive-navbar-nav',
                            }),
                            Object(p.jsx)(x.a.Collapse, {
                              id: 'responsive-navbar-nav',
                              children: Object(p.jsxs)(f.a, {
                                className: 'header_right  justify-content-end',
                                children: [
                                  'Admin' === c &&
                                    Object(p.jsxs)(p.Fragment, {
                                      children: [
                                        Object(p.jsx)(f.a.Link, {
                                          href: '/adminOrders',
                                          children: 'ADMIN ORDERS',
                                        }),
                                        Object(p.jsx)(f.a.Link, {
                                          href: '/dashBoard',
                                          children: 'ADMIN DASHBOARD',
                                        }),
                                      ],
                                    }),
                                  Object(p.jsx)(f.a.Link, {
                                    href: '/cart',
                                    children: 'CART',
                                  }),
                                  Object(p.jsx)(f.a.Link, {
                                    href: '/products',
                                    children: 'PRODUCTS',
                                  }),
                                  Object(p.jsxs)(v.a, {
                                    title: 'PROFILE',
                                    id: 'collasible-nav-dropdown',
                                    children: [
                                      Object(p.jsx)(v.a.Item, {
                                        href: '/profile',
                                        children: 'Your Profile',
                                      }),
                                      Object(p.jsx)(v.a.Item, {
                                        href: '/orderHistorys',
                                        children: 'Your Orders',
                                      }),
                                      Object(p.jsx)(v.a.Item, {
                                        href: '/aboutUs',
                                        children: 'About Us',
                                      }),
                                      Object(p.jsx)(v.a.Divider, {}),
                                      Object(p.jsx)(v.a.Item, {
                                        href: '/',
                                        onClick: function () {
                                          return n.apply(this, arguments)
                                        },
                                        children: 'Logout',
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
                Object(p.jsxs)(N.d, {
                  children: [
                    Object(p.jsx)(N.b, { exact: !0, path: '/', component: P }),
                    Object(p.jsx)(N.b, { path: '/signUp', component: G }),
                    Object(p.jsx)(N.b, { path: '/adminOrders', component: $ }),
                    Object(p.jsx)(N.b, { path: '/cart', component: H }),
                    Object(p.jsx)(N.b, { path: '/dashBoard', component: Q }),
                    Object(p.jsx)(N.b, { path: '/products', component: T }),
                    Object(p.jsx)(N.b, { path: '/profile', component: F }),
                    Object(p.jsx)(N.b, { path: '/aboutUs', component: W }),
                    Object(p.jsx)(N.b, { path: '/addProduct', component: J }),
                    Object(p.jsx)(N.b, {
                      path: '/orderHistorys',
                      component: ce,
                    }),
                  ],
                }),
              ],
            }),
          })
        }
      u.a.defaults.withCredentials = !0
      var re = function () {
          return Object(p.jsx)(p.Fragment, {
            children: Object(p.jsx)(b, { children: Object(p.jsx)(ae, {}) }),
          })
        },
        se = function (e) {
          e &&
            e instanceof Function &&
            c
              .e(3)
              .then(c.bind(null, 129))
              .then(function (t) {
                var c = t.getCLS,
                  a = t.getFID,
                  r = t.getFCP,
                  s = t.getLCP,
                  n = t.getTTFB
                c(e), a(e), r(e), s(e), n(e)
              })
        }
      n.a.render(
        Object(p.jsx)(r.a.StrictMode, { children: Object(p.jsx)(re, {}) }),
        document.getElementById('root')
      ),
        se()
    },
    63: function (e, t, c) {},
    64: function (e, t, c) {},
    65: function (e, t, c) {
      e.exports = { wrapper: 'Login_wrapper__2rGJU' }
    },
    69: function (e, t, c) {
      e.exports = { wrapper: 'Signup_wrapper__1adFh' }
    },
    76: function (e, t, c) {},
    78: function (e, t, c) {},
    99: function (e, t, c) {},
  },
  [[114, 1, 2]],
])
//# sourceMappingURL=main.3cc29e36.chunk.js.map
