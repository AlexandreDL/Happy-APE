<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManagerInterface;

class UserController extends AbstractController
{
    /**
     * @Route("/admin/users", name="user_list")
     */
    // public function list(UserRepository $userRepository)
    // {
    //     $users = $userRepository->findAll();
    //     return $this->json($users);
    // }

    // /**
    //  * @Route("/profile/user/{id}", name="user_show", methods={"GET"}))
    //  */
    // public function show(User $user)
    // {
    //     if (empty($user)) {
    //         return new JsonResponse(['message' => 'User not found'], Response::HTTP_NOT_FOUND);
    //       }
    //     return $this->json($user);
    // }

    // // /**
    // //  * @Route("/admin/user/create", name="user_create")
    // //  */
    // // non créée pour l'instant. est-ce qu'un admin a le droit de créer un compte pour quelqu'un??? 


    // /** 
    //  * @Route("/profil/user/{id}/edit", name="user_edit")
    //  */
    // public function edit(User $user, Request $request, EntityManagerInterface $entityManager) 
    // {
    //     // $this->denyAccessUnlessGranted
    //     $user = json_decode($request->getContent());
    //     if ($user === null) {
    //         return new JsonResponse(['message' =>'Cet utilisateur n\'existe pas.'], Response::HTTP_NOT_FOUND);
    //     }

    //     $entityManager->flush();

    //     $response = new JsonResponse($user, 200);
    //     return $response;
    // }


    // /**
    //  * @Route("/admin/user/{id}/delete", name="user_delete")
    //  */
    // public function delete($id) {

    //     $user = $this->getDoctrine()->getRepository(User::class)->find($id);
        
    //    if ($user) {
    //      $entityManager = $this->getDoctrine()->getManager();
    //      $entityManager->remove($user);
    //      $entityManager->flush();
    //      }
    //   return new Response(null, 204);
    // }
}  
