<?php

namespace App\Controller;

use App\Entity\Role;
use App\Repository\RoleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/admin", name="admin_roles")
 */
class RoleController extends AbstractController
{
    /**
     * @Route("/roles", name="role_list", methods = {"GET"})
     */
    public function list(RoleRepository $roleRepository)
    {
       $roles = $roleRepository->findAll();
       return $this->json($roles);
    }

    /**
     * @Route("/role/{id}", name="role_one", methods={"GET"}))
     */
    public function one(Role $role)
    {   
        if (empty($role)) {
            return new JsonResponse(['message' => 'This role does not exist'], Response::HTTP_NOT_FOUND);
          }
        return $this->json($role);
    }

     /**
     * Creates a new role entity.
     *
     * @Route("/api/role/create", methods={"POST"}, name="role_create")
     */
    public function create(Request $request, EntityManagerInterface $entityManager) {
        $newRole = json_decode($request->getContent(), true);  
 
         $role = new Role();
         $role->setRole($newRole->role);
 
         $entityManager->persist($role);
         $entityManager->flush();
         
         $data = [
             'status' => 201,
             'message' => 'Le role à été créé'
         ];
         return new JsonResponse($data, 201);  
     }
     
     /**
      * @Route("/api/role/{id}/edit", name="role_edit", methods = {"PUT"})
      */
     public function edit(Role $role, Request $request) 
     {
         // $this->denyAccessUnlessGranted
         $role = json_decode($request->getContent());
         if ($role === null) {
             return new JsonResponse(['message' =>'Ce role n\'existe pas.'], Response::HTTP_NOT_FOUND);
         }
 
         $response = new JsonResponse($role, 200);
         return $response;
     }
 
 
     /**
      * @Route("/api/role/{id}/delete", name="role_delete")
      */
     public function delete($id) {
 
         $role = $this->getDoctrine()->getRepository(role::class)->find($id);
         
         if ($role) {
           $entityManager = $this->getDoctrine()->getManager();
           $entityManager->remove($role);
           $entityManager->flush();
         }
          return new Response(null, 204);  
       }
}

