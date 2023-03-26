describe('Create a Story ', () => {
    it('create story', () => {
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
      cy.wait(10000)
      cy.get("[id='input/0']").type("1")
      cy.get("[id='input/1']").type("2")
      cy.get("[id='input/2']").type("3")
      cy.get("[id='input/3']").type("4")
      cy.get("[id='input/4']").type("5")
      cy.get("[id='input/5']").type("6")
  
  
      cy.contains("Login Now").click({force: true})
  
  
      //cy.wait(10000)

      cy.url().should('eq', 'https://qause-phi.vercel.app/ngobackend/profile')

      cy.contains("Create a New Story").click()

      cy.contains("Add Story").click()
    
      cy.get("[class='flex-1 pl-2 pb-1 outline-0']").type("Story1")

      cy.get("[class='mb-2 flex min-h-[55px] w-full cursor-pointer items-center justify-between rounded-sm border-t border-b border-r border-l border-gray-400 px-[15px] py-[4px] font-semibold text-[#696969]']").check("Agriculture")


     // cy.get("[class='flex outline-0 xs:w-[60%]']").click().type("Agriculture")

      //cy.get("[value='Agriculture']").click()
      

      cy.get("[class='mb-2 flex min-h-[55px] w-full cursor-pointer items-center justify-between rounded-sm border-t border-b border-r border-l border-gray-400 px-[15px] py-[4px] font-semibold text-[#696969]']").click()

    
     // cy.get("[class='px-4 text-center text-base text-[#484848]").selectFile('Capture10.PNG')
      //cy.get(':nth-child(1) > :nth-child(1) > label > .h-\[193px\] > .mr-auto > .flex > .px-4').selectFile('Capture10.PNG')
      cy.contains("Drag a File here or browse for a file to upload").selectFile('Capture10.PNG')

      cy.get("[class='rounded-full bg-[#253dc0] px-[1.5rem] py-[0.5rem] text-[18px] font-bold text-white disabled:cursor-not-allowed disabled:bg-gray-600']").click()
  
  
      cy.get("[class='ql-editor ql-blank']").type("Story1 Story1 Story1 Story1 Story1 Story1 Story1 Story1 Story1 Story1Story1 Story1 Story1 Story1 Story1")
  
  
      cy.get("[class='mt-[70px] block h-[67px] w-full max-w-[276px] rounded-sm bg-[#253dc0] text-xl font-medium text-white']").click()
    })
})