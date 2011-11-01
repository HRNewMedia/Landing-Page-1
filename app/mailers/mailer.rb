class Mailer < ActionMailer::Base

  def lead_notification(args = {})
    @anrede = args[:anrede]
    @titel = args[:titel]
    @name = args[:name]
    @unternehmen = args[:unternehmen]
    @position = args[:telefon]
    @email = args[:email]
    @mitteilung = args[:mitteilung]

    subject = [
      'Anfrage von', @anrede, @titel, @name, '( Firma: ', @unternehmen, ' / ',
      @position, ')'
    ]

    mail(
      to: [@email, 'matt.beedle@1000jobboersen.de'], subject: subject.join(' '),
      from: '1000jobboersen.de <service@1000jobboersen.de>'
    )
  end
end
