class Mailer < ActionMailer::Base

  def lead_notification(email)
    @email = email

    subject = [
      'Anfrage von', email.salutation, email.title, email.name,
      '( Firma: ', email.company, ' / ', email.position, ')'
    ]

    mail(
      to: [email.email, 'matt.beedle@1000jobboersen.de'], subject: subject.join(' '),
      from: '1000jobboersen.de <service@1000jobboersen.de>'
    )
  end
end
