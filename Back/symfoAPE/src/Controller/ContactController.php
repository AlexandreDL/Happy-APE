<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Contact;
use Doctrine\ORM\EntityManagerInterface;

class ContactController extends AbstractController
{
    /**
     * @Route("/api/contact", name="api_contact", methods = {"POST"})
     */
    public function contactUs(Request $request, Contact $contact, EntityManagerInterface $entityManager)
    {
        $newContact = json_decode($request->getContent());
        $contact = new Contact(); 
        $contact->setLastname($newContact->lastmane);
        $contact->setFirstname($newContact->firstname);
        $contact->setEmail($newContact->email);
        $contact->setMesssage($newContact->message);
 
        $entityManager->persist($contact);
        $entityManager->flush();

        return new JsonResponse($contact);
    }
}
