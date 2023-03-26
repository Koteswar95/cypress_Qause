describe('NGO LogIn with mobile number ', () => {
  it('NGO LogIn with correct Mobile number', () => {
    //cy.visit("https://qause-phi.vercel.app/")

    cy.visit("https://qause-af4ffbg1v-qause-tech.vercel.app/")
    
    cy.contains("Sign in").click({force: true})

    cy.get("[alt='non-profit']").click()

    //cy.url().should('eq', 'https://qause-phi.vercel.app/ngo-login')

    cy.contains("Request OTP").click({force: true})
    cy.wait(1000)
    cy.get("[id='number_error']").contains('Mobile Number is required')
    cy.get("[placeholder='Your Mobile Number']").click().type("9742355087")

    cy.contains("Request OTP").click({force: true})

    cy.get("[id='input/0']").type("1")
    cy.get("[id='input/1']").type("2")
    cy.get("[id='input/2']").type("3")
    cy.get("[id='input/3']").type("4")
    cy.get("[id='input/4']").type("5")
    cy.get("[id='input/5']").type("6")


    cy.contains("Login Now").click({force: true})


    cy.wait(10000)

  })
  it('NGO LogIn with in-correct Mobile number', () => {
    //cy.visit("https://qause-phi.vercel.app/")

    cy.visit("https://qause-af4ffbg1v-qause-tech.vercel.app/")
    
    cy.contains("Sign in").click({force: true})

    cy.get("[alt='non-profit']").click()

    //cy.url().should('eq', 'https://qause-phi.vercel.app/ngo-login')

    cy.contains("Request OTP").click({force: true})
    cy.wait(1000)
    cy.get("[id='number_error']").contains('Mobile Number is required')
    cy.wait(10000)

  })
  it('NGO LogIn with correct Mobile number in-correct otp', () => {
    //cy.visit("https://qause-phi.vercel.app/")

    cy.visit("https://qause-af4ffbg1v-qause-tech.vercel.app/")
    
    cy.contains("Sign in").click({force: true})

    cy.get("[alt='non-profit']").click()

    //cy.url().should('eq', 'https://qause-phi.vercel.app/ngo-login')


    cy.get("[placeholder='Your Mobile Number']").click().type("9742355087")

    cy.contains("Request OTP").click({force: true})

    cy.get("[id='input/0']").type("1")
    cy.get("[id='input/1']").type("2")
    cy.get("[id='input/2']").type("3")
    cy.get("[id='input/3']").type("4")
    cy.get("[id='input/4']").type("5")
    cy.get("[id='input/5']").type("7")


    cy.contains("Login Now").click({force: true})

    cy.get("[id='otp_error']").contains('OTP is Invalid')

    cy.wait(10000)

  })
  it('NGO LogIn with correct Mobile number with invalid otp', () => {
    //cy.visit("https://qause-phi.vercel.app/")

    cy.visit("https://qause-af4ffbg1v-qause-tech.vercel.app/")
    
    cy.contains("Sign in").click({force: true})

    cy.get("[alt='non-profit']").click()

    //cy.url().should('eq', 'https://qause-phi.vercel.app/ngo-login')

    cy.get("[placeholder='Your Mobile Number']").click().type("9742355087")

    cy.contains("Request OTP").click({force: true})

    cy.get("[id='input/0']").type("1")
    cy.get("[id='input/1']").type("2")
    cy.get("[id='input/2']").type("3")
    cy.get("[id='input/3']").type("4")
    cy.get("[id='input/4']").type("5")


    cy.contains("Login Now").click({force: true})

    cy.get("[id='otp_error']").contains('Please Enter 6 digits OTP')
    cy.wait(10000)

   

  })
})