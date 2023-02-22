package com.Starapp.Starapp.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.Starapp.Starapp.dto.request.MailContent;
import com.Starapp.Starapp.repo.UserRepository;
import com.Starapp.Starapp.service.MailService;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailServiceImpl implements MailService {
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired private JavaMailSender javaMailSender;
	@Value("${spring.mail.username}") private String sender;
	 
	 
	
	public ResponseEntity<String> sendMail(MailContent mailContent) {

		String managerEmail = userRepo.getEmailById(mailContent.getManagerId());
		String empMail = userRepo.getEmailById(mailContent.getUserId());
		String message = mailContent.getResponseText();
		System.out.println(managerEmail);
		System.out.println(empMail);
		System.out.println(sender);
		String ResponseType ;
		
	
		if(mailContent.getIsApproved())
			ResponseType = " Your Request is Approved";
		else 
			ResponseType = "Your Request is Rejected";
		
		try {
 
        	SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo( managerEmail, empMail );
            
            mailMessage.setText(message);
            mailMessage.setSubject("Timesheet Requests");

            
            // Sending the mail
            javaMailSender.send(mailMessage);

            
        	System.out.println("step3");
        }
 
        // Catch block to handle the exceptions
        catch (Exception e) {
        	System.out.println(e);
        	return new ResponseEntity<>("Error", HttpStatus.EXPECTATION_FAILED); 
        }
  		return new ResponseEntity<>("sent mail succesfully", HttpStatus.ACCEPTED); 
	}
}
