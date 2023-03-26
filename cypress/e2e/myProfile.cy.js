describe('My Profile ', () => {
    it('Update Profile', () => {
      cy.visit("https://qause-phi.vercel.app/")
  
      //cy.visit("https://qause-af4ffbg1v-qause-tech.vercel.app/")
      
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
  
  
      //cy.wait(10000)

      cy.url().should('eq', 'https://qause-phi.vercel.app/ngobackend/profile')

      cy.get("[class='rounded bg-blue-800 px-4 py-2 font-bold text-white']").click()

      cy.url().should('eq', 'https://qause-phi.vercel.app/ngobackend/profile/details/ngo')

      cy.contains("About NGO")


      
    })
    it('Activate Donation', () => {
        cy.visit("https://qause-phi.vercel.app/")
    
        //cy.visit("https://qause-af4ffbg1v-qause-tech.vercel.app/")
        
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
    
    
        //cy.wait(10000)
  
        cy.url().should('eq', 'https://qause-phi.vercel.app/ngobackend/profile')
        cy.get("[class='my-2 rounded border border-blue-500 px-4 py-2 text-xs sm:text-base']").click()

        cy.url().should('eq', 'https://qause-phi.vercel.app/ngobackend/profile/details/bank')
  
        cy.contains("Bank Details")
  
        
      })
      it('Donation Recieved', () => {
        cy.visit("https://qause-phi.vercel.app/")
    
        //cy.visit("https://qause-af4ffbg1v-qause-tech.vercel.app/")
        
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
    
    
        //cy.wait(10000)
  
        cy.url().should('eq', 'https://qause-phi.vercel.app/ngobackend/profile')

        cy.contains("View Detail").click()

        cy.url().should('eq', 'https://qause-phi.vercel.app/ngobackend/profile/details/transactions')
  
        cy.contains("Transaction")
  
        
      })
      it('Credit Left', () => {
        cy.visit("https://qause-phi.vercel.app/")
    
        //cy.visit("https://qause-af4ffbg1v-qause-tech.vercel.app/")
        
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
    
    
        //cy.wait(10000)
  
        cy.url().should('eq', 'https://qause-phi.vercel.app/ngobackend/profile')

        cy.contains("View History").click()

        cy.url().should('eq', 'https://qause-phi.vercel.app/ngobackend/profile/details/credits')
  
        cy.contains("Credits")
  
        
      })
})