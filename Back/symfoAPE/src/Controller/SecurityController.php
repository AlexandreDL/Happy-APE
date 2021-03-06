<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class SecurityController extends AbstractController
{
/**
 * @Route("/register", name="register", methods={"POST"})
 */
   public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder, EntityManagerInterface $entityManager, SerializerInterface $serializer, ValidatorInterface $validator)
   {
       $values = json_decode($request->getContent());
       if(isset($values->username,$values->password)) {
           $user = new User();
           $user->setEmail($values->email);
           $user->setUsername($values->username);
           $user->setIsParent(true);
           $user->setPassword($passwordEncoder->encodePassword($user, $values->password));
           $user->setFirstname($values->firstname);
           $user->setLastname($values->lastname);
           $user->setRoles($user->getRoles());
           // $errors = $validator->validate($user);
           // if(count($errors)) {
           //     $errors = $serializer->serialize($errors, 'json');
           //     return new Response($errors, 500, [
           //         'Content-Type' => 'application/json'
           //     ]);
           // }
           $entityManager->persist($user);
           $entityManager->flush();
           $data = [
               'status' => 201,
               'message' => 'L\'utilisateur a été créé'
           ];
           return new JsonResponse($data, 201);
       }
       $data = [
           'status' => 500,
           'message' => 'Vous devez renseigner les clés email et password'
       ];
       return new JsonResponse($data, 500);
   }
   /**
    * @Route("/login", name="login", methods={"GET|POST"})
    */
   public function login(Request $request)
   {
       $user = $this->getUser();
       if($user === null) {
           return new JsonResponse([
               "error" => "Pas d'utilisateur"
           ]);
       } else {
           return $this->json([
               'email' => $user->getEmail(),
               'roles' => $user->getRoles()
           ]);
       }
   }
}
